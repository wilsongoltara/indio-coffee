import Logo from '@assets/Logo';
import Menu from './Menu';

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center'>
      <Logo />
      <Menu />
    </nav>
  );
};
