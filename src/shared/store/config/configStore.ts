import { configureStore } from '@reduxjs/toolkit';
import modal from '../modules/modal';

export default configureStore({
  reducer: {
    modal,
  },
});
