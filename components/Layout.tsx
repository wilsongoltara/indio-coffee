import Header from './global/Header';
import { ChildrenProps } from '@interfaces/props';

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
