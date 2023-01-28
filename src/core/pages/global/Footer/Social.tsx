import { MenuProps } from '~/core/interfaces/props';
import Links from '../Links';
import Icons from './Icons';

export default function Social({ links }: MenuProps) {
  return (
    <div className='mt-10 m-5 font-medium'>
      <Icons />
      <div className='mt-5'>
        <Links 
          links={links} 
          classItem='py-2 text-gray-600 lg:pr-8' 
          classList='lg:flex'
        />
      </div>
      <div className='my-5 text-gray-400 text-sm'>
        <span>&copy; 2023 Indio Coffee Company. All rights reserved.</span>
      </div>
    </div>
  );
}
