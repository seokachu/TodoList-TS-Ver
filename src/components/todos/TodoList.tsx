import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todos';
import TodoItems from './TodoItems';
import { IInputForm } from '../../hooks/interface';

const TodoList = () => {
  const query = useQuery<IInputForm[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  console.log(query);
  if (query.isLoading) {
    return <div>로딩중입니다! 조금만 기다려 주세요...</div>;
  }

  if (query.isError) {
    console.log('Error:', query.isError);
  }

  const workingTodos = query.data
    ? query.data.filter((todo) => !todo.isdone)
    : [];
  const doneTodos = query.data ? query.data.filter((todo) => todo.isdone) : [];

  const renderTodoItems = (queryData: IInputForm[], title: string) => (
    <section>
      <h2>{title}</h2>
      <ul>
        {queryData.map((item: IInputForm) => (
          <TodoItems key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );

  return (
    <>
      {renderTodoItems(workingTodos, '✍️ WORKING')}
      {renderTodoItems(doneTodos, '🌟 DONE')}
    </>
  );
};

export default TodoList;
