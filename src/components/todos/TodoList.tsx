import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todos';
import TodoItems from './TodoItems';
import { IInputForm } from '../../hooks/interface';
import * as S from '../../styles/style';
import { useAppSelector } from '@/shared/store/hooks/hooks';

const TodoList = () => {
  const order = useAppSelector((state) => state.todo.value);

  console.log(order);
  //react-query getTodos 내용 불러오기
  const query = useQuery<IInputForm[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  // console.log(query);

  if (query.isLoading) {
    return <div>로딩중입니다! 조금만 기다려 주세요...</div>;
  }

  if (query.isError) {
    console.log('Error:', query.isError);
  }

  //undefined일 수 있기 때문에 데이터가 있냐?로 3항연산자로 바꿈
  const workingTodos = query.data
    ? query.data.filter((todo) => !todo.isdone)
    : [];
  const doneTodos = query.data ? query.data.filter((todo) => todo.isdone) : [];
  const sortTodos = query.data ? [...query.data] : [];

  console.log(sortTodos);

  const renderTodoItems = (queryData: IInputForm[], title: string) => (
    <section>
      <S.H2>{title}</S.H2>
      <S.TodoList>
        {queryData.map((item: IInputForm) => (
          <TodoItems key={item.id} item={item} />
        ))}
      </S.TodoList>
    </section>
  );

  //sort로 정렬
  if (order === 'asc') {
    sortTodos.sort(
      (a: IInputForm, b: IInputForm) =>
        a.createAt.getTime() - b.createAt.getTime()
    );
  } else if (order === 'desc') {
    sortTodos.sort(
      (b: IInputForm, a: IInputForm) =>
        b.createAt.getTime() - a.createAt.getTime()
    );
  }

  return (
    <>
      {renderTodoItems(workingTodos, '✍️ WORKING')}
      {renderTodoItems(doneTodos, '🌟 DONE')}
    </>
  );
};

export default TodoList;
