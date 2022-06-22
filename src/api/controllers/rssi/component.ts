import { GetRssiReq, GetRssiRes } from './types';

import { api } from '../../core';

export const getConnectionsRssi = ({ sid }: GetRssiReq) =>
  api.get<undefined, GetRssiRes>(`connections/${sid}`);
