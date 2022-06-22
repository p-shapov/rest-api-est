import { GetAdvertisingRes } from './types';

import { api } from '../../core';

export const getAdvertising = () => api.get<undefined, GetAdvertisingRes>('advertising');
