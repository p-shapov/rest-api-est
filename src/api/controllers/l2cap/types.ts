export type PostL2CapReq = {
  bt_addr: string;
  psm: number;
  socket_address: string;
};

export type PostL2CapRes = {
  result: 'Success';
  data: null;
};

export type DeleteL2CapReq = {
  bt_addr: string;
  psm: number;
};

export type DeleteL2CapRes = {
  result: 'Success';
  data: null;
};
