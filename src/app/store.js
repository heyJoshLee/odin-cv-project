import { configureStore } from '@reduxjs/toolkit';
import generalReducer from '../features/crud/personal/personalSlice';
import eductaionalReducer from '../features/crud/educational/educationalSlice';

export default configureStore({
  reducer: {
    general: generalReducer,
    educational: eductaionalReducer,
  },
});
