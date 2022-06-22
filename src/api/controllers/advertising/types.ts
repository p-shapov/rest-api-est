export type GetAdvertisingRes = Array<{
  rssi: number;
  address: {
    adr_type: string;
    adr: Array<number>;
  };
  pdu_type: string;
  entries: Array<string>;
}>;
