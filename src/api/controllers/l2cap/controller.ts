import { DeleteL2CapReq, DeleteL2CapRes, PostL2CapReq, PostL2CapRes } from './types';

import { api } from '../../core';

export const postL2Cap = ({ bt_addr, ...body }: PostL2CapReq) =>
  api.post<undefined, PostL2CapRes>(`connections/${bt_addr}/l2cap`, body);

export const deleteL2Cap = ({ bt_addr, psm }: DeleteL2CapReq) =>
  api.delete<undefined, DeleteL2CapRes>(`connections/${bt_addr}/l2cap/${psm}`);
