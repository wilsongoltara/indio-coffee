import Logo from '@assets/Logo';
import { links } from '@lib/links';
import ButtonsBar from './ButtonsBar';
import Menu from './Menu';

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center h-16 ml-5 md:h-20 lg:h-24 lg:ml-10'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <Logo />
        <Menu links={links}/>
      </div>
      <ButtonsBar />
    </nav>
  );
};
