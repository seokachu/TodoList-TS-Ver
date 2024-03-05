import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todos';
import TodoItems from './TodoItems';
import { IInputForm } from '../../hooks/interface';

const TodoList = () => {
  const query = useQuery({
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

  // const filterCardItem = query.data.filter((item) => item.id === id);

  return (
    <ul>
      {query.data.map((item: IInputForm) => (
        <TodoItems key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
