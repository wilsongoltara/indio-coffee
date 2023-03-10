import dynamic from 'next/dynamic';
import { linksMenu } from '~/core/lib/links';
import ButtonsBar from './ButtonsBar';
import Menu from './Menu';

const DynamicLogo = dynamic(() => import('./Logo'));

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center h-[72px] ml-5 md:h-20 lg:h-24 w-full'>
      <div className='flex items-center justify-between w-full md:w-auto 2xl:m-20'>
        <DynamicLogo />
        <Menu links={linksMenu} />
      </div>
      <ButtonsBar />
    </nav>
  );
}
