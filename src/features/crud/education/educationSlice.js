import { createSlice } from '@reduxjs/toolkit';

export const educationSlice = createSlice({

  name: 'education',

  initialState: [],

  reducers: {
    setEducationInformation: (state, action) => {
      state = action.payload;
      return state;
    },
    editEducationItem: (state, action) => state.map((educationItem) => {
      if (educationItem.itemID !== action.payload.itemID) { return educationItem; }
      return { ...educationItem, ...action.payload.formValues };
    }),
    deleteEducationItem: (state, action) => state.filter((educationItem) => {
      if (educationItem.itemID !== action.payload) { return educationItem; }
    }),
  },
});

export const { setEducationInformation, editEducationItem, deleteEducationItem } = educationSlice.actions;

export default educationSlice.reducer;
