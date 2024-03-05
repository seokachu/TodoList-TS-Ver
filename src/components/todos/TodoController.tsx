import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoController = () => {
  return (
    <div>
      <p>#####컨트롤러 영역입니다.######</p>
      <TodoForm />
      <TodoList />
      <p>#####컨트롤러 영역입니다.######</p>
    </div>
  );
};

export default TodoController;
