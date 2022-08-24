import { createSlice } from '@reduxjs/toolkit';

export const experienceSlice = createSlice({

  name: 'experience',

  initialState: [],

  reducers: {
    setExperienceInformation: (state, action) => {
      state = action.payload;
      return state;
    },
    editExperienceItem: (state, action) => state.map((experienceItem) => {
      if (experienceItem.itemID !== action.payload.itemID) { return experienceItem; }
      return { ...experienceItem, ...action.payload.formValues };
    }),
    deleteExperienceItem: (state, action) => state.filter((experienceItem) => {
      if (experienceItem.itemID !== action.payload) { return experienceItem; }
    }),
  },
});

export const { setExperienceInformation, editExperienceItem, deleteExperienceItem } = experienceSlice.actions;

export default experienceSlice.reducer;
