import { ChildrenProps } from '@interfaces/props';
import { createContext, useState } from 'react';
import Header from './global/Header';

const AppContext = createContext({});

export default function Layout({ children }: ChildrenProps) {
  const [nav, setNav] = useState(false);

  return (
    <AppContext.Provider value={{ nav, setNav }}>
      <Header />
      {children}
    </AppContext.Provider>
  );
};
