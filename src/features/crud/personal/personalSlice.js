import { createSlice } from '@reduxjs/toolkit';

export const personalSlice = createSlice({

  name: 'personal',

  initialState: {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    picture: '',
  },

  reducers: {
    setPersonalInformation: (state, action) => {
      const {
        firstName, lastName, address, phoneNumber, email, picture,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.address = address;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.picture = picture;
    },
  },
});

export const { setPersonalInformation } = personalSlice.actions;

export default personalSlice.reducer;
