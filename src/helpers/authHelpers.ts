import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants/app';

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getToken = () => {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return token === 'undefined' ? '' : token;
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const getRefreshToken = () => {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem(REFRESH_TOKEN_KEY);

  return token === 'undefined' ? '' : token;
};

export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
