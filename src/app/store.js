import { configureStore } from '@reduxjs/toolkit';
import generalReducer from '../features/crud/personal/personalSlice';

export default configureStore({
  reducer: {
    general: generalReducer,
  },
});
