import { createSlice, current } from '@reduxjs/toolkit';
import { saveToLocalStorage, getInitialStateFromLocalStorage } from '../../utilities/localStorageManager';

const REDUCER_NAME = 'education';

export const educationSlice = createSlice({

  name: REDUCER_NAME,

  initialState: getInitialStateFromLocalStorage(REDUCER_NAME, []),

  reducers: {
    setEducationInformation: (state, action) => {
      saveToLocalStorage(REDUCER_NAME, action.payload);
      return action.payload;
    },
    editEducationItem: (state, action) => {
      let outputArray = [];
      outputArray = state.map((educationItem) => {
        if (educationItem.itemID !== action.payload.itemID) { return educationItem; }
        return { ...educationItem, ...action.payload.formValues };
      });

      saveToLocalStorage(REDUCER_NAME, outputArray);
      return outputArray;
    },
    deleteEducationItem: (state, action) => {
      let outputArray = [];
      outputArray = state.filter((educationItem) => {
        if (educationItem.itemID !== action.payload) { return educationItem; }
      });
      saveToLocalStorage(REDUCER_NAME, outputArray);
      return outputArray;
    },
  },
});

export const { setEducationInformation, editEducationItem, deleteEducationItem } = educationSlice.actions;

export default educationSlice.reducer;
