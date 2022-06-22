import { Box } from '@mui/material';
import { FC } from 'react';

export type Props = {
  items: Array<{ hash: string; l2cap: boolean }>;
  onConnect(hash: string): void;
  onDisconnect(hash: string): void;
};

export const Connection: FC<Props> = () => {
  return <Box></Box>;
};
