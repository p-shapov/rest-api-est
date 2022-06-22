export type PostConnectionsReq = {
  target: {
    adr_type: string;
    adr: Array<number>;
  };
  options: {
    coded_phy: boolean;
    no_1_mb: boolean;
  };
};

export type PostConnectionsRes = {
  result: 'Success';
  data: null;
};

export type GetConnectionsRes = {
  result: 'Success';
  data: {
    connections: Record<
      string,
      {
        state: {
          Established: {
            bt_address: {
              adr_type: string;
              adr: Array<string>;
            };
            conn_uid: number;
          };
        };
        l2cap_channels: Array<{
          psm: number;
          socket_address: string;
          state: { Established: Array<number> }; // Maybe [number, number] ?
        }>;
      }
    >;
  };
};

export type DeleteConnectionsReq = {
  sid: string;
};
