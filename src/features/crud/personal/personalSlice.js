import { createSlice } from '@reduxjs/toolkit';

export const personalSlice = createSlice({

  name: 'personal',

  initialState: {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    imagePath: '',
  },

  reducers: {
    setPersonalInformation: (state, action) => {
      const {
        firstName, lastName, address, phoneNumber, email,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.address = address;
      state.phoneNumber = phoneNumber;
      state.email = email;
    },
  },
});

export const { setPersonalInformation } = personalSlice.actions;

export default personalSlice.reducer;
