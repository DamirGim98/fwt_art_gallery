import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import useRefreshToken from '../hooks/useRefreshToken';
import { BASE_URL } from './instance';

const privateConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
};

export const privateInstance = axios.create(privateConfig);

const refresh = useRefreshToken();

/* eslint-disable no-param-reassign */
privateInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token && config.headers && !config.headers.Authorization) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);
/* eslint-enable no-param-reassign */

privateInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      try {
        const newAccessToken = await refresh();
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return await privateInstance(prevRequest);
      } catch (err) {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);
