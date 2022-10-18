import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env['REACT_APP_BASE_URL '];

const loginConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const instance = axios.create(loginConfig);
