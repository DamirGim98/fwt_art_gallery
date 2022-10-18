import Cookies from 'js-cookie';
import Endpoints from '../endpoints';
import { instance } from '../instance';
import type { IRefreshRequest, IRegisterRequest, IRegisterResponse } from './types';

export const AuthApi = {
  authorize: async (params: IRegisterRequest) => {
    const response = await instance.post<IRegisterResponse>(Endpoints.AUTH.REGISTER, {
      params,
    });
    Cookies.set('accessToken', response.data.accessToken);
    Cookies.set('refreshToken', response.data.refreshToken);
    return response.data;
  },
  refresh: async (params: IRefreshRequest) => {
    const response = await instance.post<IRegisterResponse>(Endpoints.AUTH.REFRESH, {
      params,
    });
    return response.data;
  },
};
