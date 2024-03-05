import React from 'react';
import { IInputForm } from '../../hooks/interface';

interface Props {
  item: IInputForm;
}

const TodoItems: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <button>삭제하기</button>
      <button>완료</button>
    </li>
  );
};

export default TodoItems;
