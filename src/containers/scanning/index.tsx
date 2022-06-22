import { Box, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { putScanning } from '../../api/controllers/scanning/controller';
import {
  CODED_PHY,
  GET_KEYS,
  NO_1_MB,
  SCAN_INTERVAL,
  SCAN_TIMEOUT,
  WITH_SCAN,
} from '../../globals/constants';
import { useInterval } from '../../hooks/useInterval';
import { useTimeout } from '../../hooks/useTimeout';

export const Scanning: FC = () => {
  const [scanning, handleStart, handleStop] = useScan();

  return (
    <Box sx={{ display: 'grid', gridAutoFlow: 'column', columnGap: '10px' }}>
      <LoadingButton loading={scanning} variant="contained" onClick={handleStart}>
        SCAN
      </LoadingButton>

      {scanning && <Button onClick={handleStop}>STOP</Button>}
    </Box>
  );
};

const useScan = () => {
  const [scanning, setScanning] = useState(false);
  const client = useQueryClient();
  const start = useMutation(() =>
    putScanning({
      action: 'Start',
      data: {
        with_scan: WITH_SCAN,
        coded_phy: CODED_PHY,
        no_1_mb: NO_1_MB,
      },
    }),
  );
  const stop = useMutation(() => putScanning({ action: 'Stop' }));

  const handleStart = () => {
    start.mutate();
    setScanning(true);
  };

  const handleStop = () => {
    stop.mutate();
    setScanning(false);
  };

  const handleInvalidate = () => client.invalidateQueries(GET_KEYS.ADVERTISING);

  useInterval(handleInvalidate, scanning ? SCAN_INTERVAL : null);
  useTimeout(handleStop, scanning ? SCAN_TIMEOUT : null);

  return [scanning, handleStart, handleStop] as const;
};
