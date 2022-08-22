import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  token: string | null;
}

const initialState: AuthState = {
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  token: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    defaultState: (state) => {
      state = initialState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;
