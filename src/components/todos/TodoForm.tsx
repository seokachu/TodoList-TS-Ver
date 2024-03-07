import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import inputForm from '../../hooks/inputForm';
import { createTodos } from '../../api/todos';
import { toast } from 'react-toastify';
import { IInputForm } from '../../hooks/interface';
import * as S from '../../styles/style';
import { randomCardColor } from '../../util/color';
import { sortTodos } from '@/shared/store/modules/todoSlice';
import { useAppDispatch } from '@/shared/store/hooks/hooks';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { formState, onChangeHandler, resetForm } = inputForm({
    id: '',
    title: '',
    content: '',
    createAt: new Date(),
    isdone: false,
    color: '',
  });

  const { title, content } = formState;

  //react-query data내용 불러오기(CREATE)
  const mutation = useMutation({
    mutationFn: (item: IInputForm) => createTodos(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  //게시글 작성하기
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    if (validation()) {
      const newTodos = {
        id: crypto.randomUUID(),
        title,
        content,
        createAt: date,
        isdone: false,
        color: randomCardColor(),
      };
      mutation.mutate(newTodos);
      resetForm();
      toast.success('입력되었습니다');
    }
  };

  //validation
  const validation = () => {
    if (!title.trim()) {
      toast.error('제목을 입력해 주세요');
      return;
    }
    if (!content.trim()) {
      toast.error('내용을 입력해 주세요');
      return;
    }
    return true;
  };

  const [sortOrder, setSortOrder] = useState('asc');

  const onChangeSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextSortOrder = e.target.value;
    dispatch(sortTodos(sortOrder));
    //select UI
    setSortOrder(nextSortOrder);
  };

  return (
    <>
      <S.Form onSubmit={onSubmitHandler}>
        <p>
          <label htmlFor="title">제목</label>
          <input
            name="title"
            type="text"
            id="title"
            value={title}
            placeholder="제목을 입력해 주세요."
            onChange={onChangeHandler}
            autoFocus
          />
        </p>
        <p>
          <label htmlFor="content">내용</label>
          <input
            name="content"
            type="text"
            id="content"
            placeholder="내용을 입력해 주세요."
            value={content}
            onChange={onChangeHandler}
          />
        </p>
        <button>등록하기</button>
      </S.Form>
      <div>
        <select onChange={onChangeSortOrder}>
          <option value="desc">오름차순</option>
          <option value="asc">내림차순</option>
        </select>
      </div>
    </>
  );
};

export default TodoForm;
