import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { privateInstance } from '../Api/instance';
import useRefreshToken from './useRefreshToken';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/Slice/AuthSlice';

/* eslint-disable no-param-reassign */
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const token = Cookies.get('accessToken');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptor = privateInstance.interceptors.request.use(
      (config) => {
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

    const responseInterceptor = privateInstance.interceptors.response.use(
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
            dispatch(logout());
            window.location.href = '/';
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      privateInstance.interceptors.request.eject(requestInterceptor);
      privateInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [token, refresh]);

  return privateInstance;
};
/* eslint-enable no-param-reassign */

export default useAxiosPrivate;
