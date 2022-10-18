import Cookies from 'js-cookie';
import { AuthApi } from '../Api/auth/authApi';

const useRefreshToken = () => {
  const token = Cookies.get('refreshToken');

  const refresh = async () => {
    const { accessToken, refreshToken } = await AuthApi.refresh({
      refreshToken: token || '',
    });
    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
    return accessToken;
  };
  return refresh;
};

export default useRefreshToken;
