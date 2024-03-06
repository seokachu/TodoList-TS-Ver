import { configureStore } from '@reduxjs/toolkit';
import random from '../modules/random';

export default configureStore({
  reducer: {
    random,
  },
});
