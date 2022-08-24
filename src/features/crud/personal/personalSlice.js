import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, getInitialStateFromLocalStorage } from '../../utilities/localStorageManager';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  email: '',
  picture: '',
};

const REDUCER_NAME = 'personal';

export const personalSlice = createSlice({

  name: REDUCER_NAME,
  initialState: getInitialStateFromLocalStorage('personal', initialState),

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
      saveToLocalStorage('personal', state);
    },
  },
});

export const { setPersonalInformation } = personalSlice.actions;

export default personalSlice.reducer;
