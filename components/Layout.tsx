import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ChildrenProps } from '../types/props';
import Content from './global/Content';
import Footer from './global/Footer';
import Header from './global/Header';

export type ContextType = {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext({} as ContextType);

export default function Layout({ children }: ChildrenProps) {
  const [nav, setNav] = useState(false);

  return (
    <AppContext.Provider value={{ nav, setNav }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AppContext.Provider>
  );
}
