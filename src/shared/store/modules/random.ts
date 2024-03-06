import { createSlice } from '@reduxjs/toolkit';

const randomColor = createSlice({
  name: 'random',
  initialState: [],
  reducers: {
    addRandom: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addRandom } = randomColor.actions;
export default randomColor.reducer;
