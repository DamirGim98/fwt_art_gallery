import Cookies from 'js-cookie';
import { ClientJS } from 'clientjs';
import Endpoints from '../endpoints';
import { instance } from '../instance';
import type { IRefreshRequest, IRegisterRequest, IRegisterResponse } from './types';

const client = new ClientJS();
const fingerprint = client.getFingerprint().toString();

export const AuthApi = {
  authorize: async ({ username, password }: { username: string; password: string }) => {
    const response = await instance.post<IRegisterResponse>(Endpoints.AUTH.REGISTER, {
      username,
      password,
      fingerprint,
    } as IRegisterRequest);
    Cookies.set('accessToken', response.data.accessToken);
    Cookies.set('refreshToken', response.data.refreshToken);
    return response.data;
  },
  refresh: async ({ refreshToken }: { refreshToken: string }) => {
    const response = await instance.post<IRegisterResponse>(Endpoints.AUTH.REFRESH, {
      refreshToken,
      fingerprint,
    } as IRefreshRequest);
    return response.data;
  },
};
