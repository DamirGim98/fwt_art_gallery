import Cookies from 'js-cookie';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectAccessToken, selectFingerprint, setNewAccessToken } from '../store/Slice/AuthSlice';
import { AuthApi } from '../Api/auth/authApi';

const useRefreshToken = () => {
  const token = useAppSelector((state) => selectAccessToken(state));
  const fingerprint = useAppSelector((state) => selectFingerprint(state));
  const dispatch = useAppDispatch();

  const refresh = async () => {
    if (token) {
      const { accessToken, refreshToken } = await AuthApi.refresh({
        refreshToken: token,
        fingerprint,
      });
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);
      dispatch(setNewAccessToken(accessToken));
      return accessToken;
    }
    return token;
  };
  return refresh;
};

export default useRefreshToken;
