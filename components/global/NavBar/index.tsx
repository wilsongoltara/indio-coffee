import Logo from '@assets/Logo';
import Menu from './Menu';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Logo />
      <Menu />
    </nav>
  );
};

export default NavBar;
