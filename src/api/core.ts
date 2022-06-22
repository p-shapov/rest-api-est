import { Axios } from 'axios';

import { axiosConfig } from './config';

export const api = new Axios(axiosConfig);

api.interceptors.response.use((res) => {
  console.log(res); // eslint-disable-line
  if (!!res.data) return JSON.parse(res.data);

  return { body: 'empty' };
});
