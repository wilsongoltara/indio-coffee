import { Link } from '@interfaces/props';
import { linksFooter } from '@lib/links';
import CustomizedAccordions from '../Accordion';
import Links from '../Links';
import Icons from './Icons';

const linksExtras: Link[] = [
  {
    link: 'privacy Notice',
    href: '/',
  },
  {
    link: 'terms of use',
    href: '/',
  },
  {
    link: 'do not share my personal information',
    href: '/',
  },
  {
    link: 'CA supply chain act',
    href: '/',
  },
  {
    link: 'Cookie Preferences',
    href: '/',
  },
];

export default function Footer() {
  return (
    <footer className='border-t text-base capitalize font-[530] py-5'>
      <CustomizedAccordions linksFooter={linksFooter}/>
      <div className='border w-auto mx-5'/>
      <div className='mt-10 ml-5 font-normal'>
        <Icons />
        <div className='mt-5'>
          <Links
            links={linksExtras}
            classItem='py-2'
          />
        </div>
        <div className='my-5 text-gray-400 text-sm'>
          <span>
            &copy; 2023 Indio Coffee Company. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
