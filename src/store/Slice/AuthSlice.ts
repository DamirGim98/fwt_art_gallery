import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthApi } from '../../Api/auth/authApi';
import type { IRegisterRequest } from '../../Api/auth/types';
import type { RootState } from '../store';

export interface IAuthState {
  authData: {
    fingerprint: string;
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: IAuthState = {
  authData: {
    fingerprint: '',
    accessToken: Cookies.get('accessToken') || null,
    isLoading: false,
    error: null,
  },
};

export const authenticateUser = createAsyncThunk(
  'auth/register',
  async (params: IRegisterRequest) => {
    return AuthApi.authorize(params);
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewAccessToken(state, action) {
      state.authData.accessToken = action.payload;
    },
    setFingerPrint(state, action) {
      state.authData.fingerprint = action.payload;
    },
    logout() {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      return initialState;
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

export const { setFingerPrint, setNewAccessToken, logout } = AuthSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.authData.accessToken;

export const selectFingerprint = (state: RootState) => state.auth.authData.fingerprint;

export default AuthSlice.reducer;
