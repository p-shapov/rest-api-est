import { createContext, FC, ReactNode, useContext, useState } from 'react';

const defaultOptions = {
  with_scan: true,
  coded_phy: true,
  no_1_mb: true,
  psm: 255,
  socket_address: '127.0.0.1:8000',
};

type Value = {
  options: {
    with_scan: boolean;
    coded_phy: boolean;
    no_1_mb: boolean;
    psm: number;
    socket_address: string;
  };
  setOptions(options: Value['options'] | { (options: Value['options']): Value['options'] }): void;
  mergeOptions(options: Partial<Value['options']>): void;
};

const Context = createContext<Value>({
  options: defaultOptions,
  setOptions: () => undefined,
  mergeOptions: () => undefined,
});

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [options, setOptions] = useState<Value['options']>(defaultOptions);

  const mergeOptions = (options: Partial<Value['options']>) =>
    setOptions((prev) => ({ ...prev, ...options }));

  return <Context.Provider value={{ options, setOptions, mergeOptions }}>{children}</Context.Provider>;
};

export const useOptions = () => useContext(Context);
