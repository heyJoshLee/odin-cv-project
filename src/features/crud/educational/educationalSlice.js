import { createSlice } from '@reduxjs/toolkit';

export const educationalSlice = createSlice({

  name: 'educational',

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

export const { setEducationInformation, editEducationItem, deleteEducationItem } = educationalSlice.actions;

export default educationalSlice.reducer;
