import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, getInitialStateFromLocalStorage } from '../../utilities/localStorageManager';

const REDUCER_NAME = 'experience';

export const experienceSlice = createSlice({

  name: REDUCER_NAME,

  initialState: getInitialStateFromLocalStorage(REDUCER_NAME, []),

  reducers: {
    setExperienceInformation: (state, action) => {
      saveToLocalStorage(REDUCER_NAME, action.payload);
      return action.payload;
    },
    editExperienceItem: (state, action) => {
      let outputArray = [];
      outputArray = state.map((experienceItem) => {
        if (experienceItem.itemID !== action.payload.itemID) { return experienceItem; }
        return { ...experienceItem, ...action.payload.formValues };
      });
      saveToLocalStorage(REDUCER_NAME, outputArray);

      return outputArray;
    },
    deleteExperienceItem: (state, action) => {
      let outputArray = [];
      outputArray = state.filter((experienceItem) => {
        if (experienceItem.itemID !== action.payload) { return experienceItem; }
      });
      saveToLocalStorage(REDUCER_NAME, outputArray);
      return outputArray;
    },
  },
});

export const { setExperienceInformation, editExperienceItem, deleteExperienceItem } = experienceSlice.actions;

export default experienceSlice.reducer;
