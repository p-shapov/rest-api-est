import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export const LayoutBox: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {children}
    </Box>
  );
};
