import { GetConnectionsRes, PostConnectionsReq, PostConnectionsRes, DeleteConnectionsReq } from './types';

import { api } from '../../core';

export const postConnections = (body: PostConnectionsReq) =>
  api.post<undefined, PostConnectionsRes>('connections', body);

export const getConnections = () => api.get<undefined, GetConnectionsRes>('connections');

export const deleteConnections = ({ sid }: DeleteConnectionsReq) =>
  api.delete<undefined, undefined>(`connections/${sid}`);
