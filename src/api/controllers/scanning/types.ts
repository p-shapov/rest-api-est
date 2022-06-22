export type PutScanningReq =
  | {
      action: 'Start';
      data: {
        with_scan: boolean;
        coded_phy: boolean;
        no_1_mb: boolean;
      };
    }
  | { action: 'Stop' };

export type PutScanningRes = {
  result: 'Success';
  data: null;
};
