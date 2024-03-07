import React from 'react';
import { IInputForm } from '../../hooks/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodos, updateTodos } from '../../api/todos';
import { toast } from 'react-toastify';
import * as S from '../../styles/style';

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
    mutationFn: async (id: string) => {
      await updateTodos(id, {
        title: item.title,
        content: item.content,
        createAt: item.createAt,
        isdone: !item.isdone,
        color: item.color,
      });
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
    editMutate(item.id);
  };

  return (
    <li style={{ backgroundColor: item.color }}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <S.Date>{item.createAt}</S.Date>
      <S.ButtonWrapper>
        <button onClick={onDeleteHander}>삭제하기</button>
        <button onClick={onClickHandleToggle}>
          {item.isdone ? '취소' : '완료'}
        </button>
      </S.ButtonWrapper>
    </li>
  );
};

export default TodoItems;
