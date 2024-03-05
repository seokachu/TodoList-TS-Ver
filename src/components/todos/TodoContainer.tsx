import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  return (
    <div>
      <p>#####컨테이너 영역입니다.######</p>
      <TodoForm />
      <TodoList />
      <p>#####컨테이너 영역입니다.######</p>
    </div>
  );
};

export default TodoContainer;
