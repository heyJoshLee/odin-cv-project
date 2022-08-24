import { configureStore } from '@reduxjs/toolkit';
import generalReducer from '../features/crud/personal/personalSlice';
import eductaionReducer from '../features/crud/education/educationSlice';
import experienceReducer from '../features/crud/experience/experienceSlice';

export default configureStore({
  reducer: {
    general: generalReducer,
    education: eductaionReducer,
    experience: experienceReducer,
  },
});
