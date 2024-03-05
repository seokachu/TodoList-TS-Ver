import React from 'react';
import { IInputForm } from '../../hooks/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodos } from '../../api/todos';
import { toast } from 'react-toastify';

interface Props {
  item: IInputForm;
}

const TodoItems: React.FC<Props> = ({ item }) => {
  //react-query client
  const queryClient = useQueryClient();

  //삭제 mutate
  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id: string) => deleteTodos(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  //완료 mutate
  const { mutate: editMutate } = useMutation({
    mutationFn: async (data: {
      id: string;
      todos: string;
      isdone: boolean;
    }) => {
      const { id, todos } = data;
      await updateTodos(id, { title: todos, content: todos, isdone: false });
      console.log(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  //삭제하기Btn
  const onDeleteHander = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deleteMutate(item.id);
      alert('삭제되었습니다.');
    } else {
      toast.error('삭제가 취소되었습니다.');
    }
  };

  //완료 Btn
  const onClickHandleToggle = () => {
    const updatedItem = { ...item, isdone: !item.isdone };
    editMutate({
      id: updatedItem.id,
      todos: `${updatedItem.title} ${updatedItem.content}`,
      isdone: updatedItem.isdone,
    });
  };

  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <button onClick={onDeleteHander}>삭제하기</button>
      <button onClick={onClickHandleToggle}>
        {item.isdone ? '취소' : '완료'}
      </button>
    </li>
  );
};

export default TodoItems;
