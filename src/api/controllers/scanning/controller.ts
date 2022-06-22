import { PutScanningReq, PutScanningRes } from './types';

import { api } from '../../core';

export const putScanning = (body: PutScanningReq) => api.put<undefined, PutScanningRes>('scanning', body);
