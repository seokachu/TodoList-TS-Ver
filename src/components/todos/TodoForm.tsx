import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent } from 'react';
import inputForm from '../../hooks/inputForm';
import { createTodos } from '../../api/todos';
import { toast } from 'react-toastify';
import { getFormattedDate } from '../../util/date';

const TodoForm = () => {
  const queryClient = useQueryClient();

  const { formState, onChangeHandler, resetForm } = inputForm({
    id: '',
    title: '',
    content: '',
    createAt: '',
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
    const newTodos = {
      id: crypto.randomUUID,
      title,
      content,
      createAt: getFormattedDate(date),
    };

    mutation.mutate(newTodos);
    resetForm();
    toast.success('입력되었습니다');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <p>
          <label htmlFor="title">제목</label>
          <input
            name="text"
            type="text"
            id="title"
            value={title}
            placeholder="제목을 입력해 주세요."
            onChange={onChangeHandler}
          />
          <span>에러영역 할거임</span>
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
          <span>에러영역 할거임</span>
        </p>
        <button>등록하기</button>
      </div>
    </form>
  );
};

export default TodoForm;
