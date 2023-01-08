import { AppContext } from '@components/Layout';
import { MenuProps } from '@interfaces/props';
import { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import Links from './Links';

export default function Menu({ links }: MenuProps) {
  const { nav, setNav } = useContext(AppContext);

  return (
    <menu>
      <div>
        <Links
          links={links}
          classList='hidden md:flex'
          classItem='links-menu'
        />
      </div>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-5 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={23} /> : <AiOutlineMenu size={23} />}
      </div>
      {nav && (
        <div>
          <Links
            links={links}
            classList='hamburg-menu'
            classItem='px-4 cursor-pointer capitalize py-6 text-3xl'
            onClick={() => setNav(!nav)}
          />
        </div>
      )}
    </menu>
  );
}
