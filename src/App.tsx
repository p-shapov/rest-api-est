import { Box, Card } from '@mui/material';

import { LayoutBox } from './components/layout';
import { Advertising } from './containers/advertising';
import { Scanning } from './containers/scanning';

export const App = () => {
  return (
    <LayoutBox>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'max-content 1fr',
          gap: '20px 50px',
          width: '1000px',
        }}
      >
        <Box sx={{ gridColumn: 1 }}>
          <Scanning />
        </Box>

        <Box sx={{ gridColumn: 1 }}>
          <Advertising />
        </Box>

        <Card sx={{ gridColumn: 2, gridRow: 2 }}></Card>
      </Box>
    </LayoutBox>
  );
};
