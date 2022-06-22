import { createContext, useContext } from 'react';

type Value = {
  rssi: number;
};

const Context = createContext<Value>({
  rssi: 0,
});

export const StoreProvider = () => {
  return null;
};

export const useStore = () => useContext(Context);
