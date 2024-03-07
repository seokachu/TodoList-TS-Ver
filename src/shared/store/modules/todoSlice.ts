import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../config/configStore';
interface OrderState {
  value: string;
}

const initialState: OrderState = {
  value: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    sortTodos: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { sortTodos } = todoSlice.actions;
export const selectCount = (state: RootState) => state.todo.value;
export default todoSlice.reducer;
