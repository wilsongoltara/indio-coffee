import { LinksFooterProps } from '~/core/interfaces/props';
import Links from '../Links';

export default function LinksFooter({ linksFooter }: LinksFooterProps) {
  return (
    <div className='hidden lg:flex m-5'>
      {linksFooter?.map((linkFooter) => (
        <div className='mr-16 max-w-[200px]' key={linkFooter.nameAccordion}>
          <h3 className='text-lg mb-5'>{linkFooter.nameAccordion}</h3>
          <Links links={linkFooter?.links} classItem='py-2 text-gray-600' />
        </div>
      ))}
    </div>
  );
}
