import { useEffect } from 'react';
import { privateInstance } from '../Api/instance';
import useRefreshToken from './useRefreshToken';
import { useAppSelector } from '../store/hooks';
import { selectAccessToken } from '../store/Slice/AuthSlice';

/* eslint-disable no-param-reassign */
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const token = useAppSelector((state) => selectAccessToken(state));

  useEffect(() => {
    const requestInterceptor = privateInstance.interceptors.request.use(
      (config) => {
        if (config.headers && !config.headers.Authorization) {
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
          const newAccessToken = await refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return privateInstance(prevRequest);
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
