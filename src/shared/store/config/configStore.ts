import { configureStore } from '@reduxjs/toolkit';
import random from '../modules/random';
import todo from '../modules/todoSlice';
import todoSlice from '../modules/todoSlice';

const store = configureStore({
  reducer: {
    random,
    todo,
    todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
