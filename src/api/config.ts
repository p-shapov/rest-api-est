import { AxiosRequestConfig } from 'axios';

const isDevelopment = process.env.NODE_ENV === 'development';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: isDevelopment ? 'https://virtserver.swaggerhub.com/cabanoff/bt_uavp/1.0.0' : '127.0.0.1:3030',
};
