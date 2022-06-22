import { List, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';

export type Props = {
  items: Array<{
    adr_type: string;
    adr: Array<number>;
  }>;
  onConnect(data: Props['items'][number]): void;
};

export const Addresses: FC<Props> = ({ items, onConnect }) => {
  return (
    <List disablePadding>
      {items.map((data) => {
        const key = data.adr.join('.');

        return (
          <ListItemButton key={key} onClick={() => onConnect(data)}>
            <ListItemText secondary={data.adr_type}>{key}</ListItemText>
          </ListItemButton>
        );
      })}
    </List>
  );
};
