import { Alert, Card } from '@mui/material';
import { FC, ReactElement } from 'react';
import { useQuery } from 'react-query';

import { Addresses } from '../../components/addresses';
import { GET_KEYS } from '../../globals/constants';
import { getAdvertising } from '../../api/controllers/advertising/controller';

export const Advertising: FC = () => {
  const { isError, data, error } = useQuery(GET_KEYS.ADVERTISING, getAdvertising);

  if (isError)
    return (
      <Wrapper>
        <Alert severity="error">{(error as { message: string })?.message || 'Unknown error'}</Alert>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Addresses items={data?.map(({ address }) => address) || []} onConnect={() => undefined} />
    </Wrapper>
  );
};

const Wrapper: FC<{ children: ReactElement }> = ({ children }) => (
  <Card sx={{ width: '300px', height: '600px' }}>{children}</Card>
);
