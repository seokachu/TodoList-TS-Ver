import TodoForm from './TodoForm';
import TodoList from './TodoList';
import * as S from '../../styles/common';

const TodoContainer = () => {
  return (
    <S.Main>
      <TodoForm />
      <TodoList />
    </S.Main>
  );
};

export default TodoContainer;
