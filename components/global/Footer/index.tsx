import { linksFooter } from '@lib/links';
import CustomizedAccordions from '../Accordion';

export default function Footer() {
  return (
    <footer className='border-t'>
      <CustomizedAccordions linksFooter={linksFooter}/>
      <div className='border w-auto mx-5'/>
      <div>
        <p>test</p>
      </div>
    </footer>
  );
}
