import {API_URL} from '../config';
import useFetch from 'use-http';

const FCM_TOKEN_URL = '/fcm-token/';

export function useRegisterFcmToken() {
  const {post, data, loading, error} = useFetch(`${API_URL}`);
  const registered = data?.status === 'ok';
  const registerFcmToken = async (token: string) => {
    return post(FCM_TOKEN_URL, {token});
  };
  return {registerFcmToken, registered, loading, error};
}
