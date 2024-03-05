import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

export const todoClient = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 목록 가져오기
export const getTodos = async () => {
  const { data } = await todoClient.get('/todos');
  return data;
};

//추가하기
export const createTodos = async (item: {
  title: string;
  content: string;
  createAt: string;
}) => {
  const { data } = await todoClient.post('/todos', item);
  return data;
};

//삭제하기
export const deleteTodos = async (id: string) => {
  await todoClient.delete(`/todos/${id}`);
  return id;
};

//수정하기
export const updateTodos = async (
  id: string,
  todos: { title: string; content: string; isdone: boolean; createAt: string }
) => {
  await todoClient.patch(`/todos/${id}`, todos);
  return id;
};
