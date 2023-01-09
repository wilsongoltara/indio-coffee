import { linksMenu } from '@lib/links';
import dynamic from 'next/dynamic';
import ButtonsBar from './ButtonsBar';
import Menu from './Menu';

const DynamicLogo = dynamic(() => import('@assets/Logo'));

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center h-[72px] ml-5 md:h-20 lg:h-24 lg:ml-10'>
      <div className='flex items-center justify-between w-full md:w-auto 2xl:m-28'>
        <DynamicLogo />
        <Menu links={linksMenu} />
      </div>
      <ButtonsBar />
    </nav>
  );
}
