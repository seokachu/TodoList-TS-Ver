import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent } from 'react';
import inputForm from '../../hooks/inputForm';
import { createTodos } from '../../api/todos';

const TodoForm = () => {
  const queryClient = useQueryClient();

  const { formState, onChangeHandler, resetForm } = inputForm({
    title: '',
    content: '',
  });

  const { title, content } = formState;

  //react-query data내용 불러오기(CREATE)
  const mutation = useMutation({
    mutationFn: (item: string) => createTodos(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  //게시글 작성하기
  const onSubmitHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    mutation.mutate({ title, content });
    resetForm();
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
