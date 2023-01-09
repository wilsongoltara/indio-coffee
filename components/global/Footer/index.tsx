import { linksFooter } from '@lib/links';
import CustomizedAccordions from '../Accordion';

export default function Footer() {
  return (
    <footer className=''>
      <CustomizedAccordions linksFooter={linksFooter}/>
    </footer>
  );
}
