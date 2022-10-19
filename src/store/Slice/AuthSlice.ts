import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthApi } from '../../Api/auth/authApi';
import type { RootState } from '../store';

export interface IAuthState {
  authData: {
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: IAuthState = {
  authData: {
    accessToken: Cookies.get('accessToken') || null,
    isLoading: false,
    error: null,
  },
};

export const authenticateUser = createAsyncThunk(
  'auth/register',
  async (params: { username: string; password: string }) => {
    return AuthApi.authorize(params);
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      state.authData.accessToken = null;
      state.authData.isLoading = false;
      state.authData.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.authData.isLoading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.authData.accessToken = action.payload.accessToken;
        state.authData.isLoading = false;
        state.authData.error = null;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.authData.isLoading = false;
        state.authData.error = action.error.message || null;
      });
  },
});

export const { logout } = AuthSlice.actions;

export const selectIsCredentials = (state: RootState) => !!state.auth.authData.accessToken;

export const selectAccessToken = (state: RootState) => state.auth.authData.accessToken;

export default AuthSlice.reducer;
