import { linksExtras, linksFooter } from '~/core/lib/links';
import CustomizedAccordions from './Accordion';
import LinksFooter from './LinksFooter';
import Social from './Social';

export default function Footer() {
  return (
    <footer className='border-t text-base capitalize font-[530] py-5'>
      <LinksFooter linksFooter={linksFooter} />
      <CustomizedAccordions linksFooter={linksFooter} />
      <div className='border w-auto mx-5' />
      <Social links={linksExtras} />
    </footer>
  );
}
