import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';

export default function ButtonsBar() {
  return (
    <div className="hidden md:inline mr-5 2xl:mr-28">
      <ul className="flex items-center text-sm font-[500]">
        <li className="px-2">
          <Link href="/">
            <span className="flex items-center text-lg pr-5 hover:text-green-600">
              <MdLocationOn className='pr-1' />
              Find a store
            </span>
          </Link>
        </li>
        <li className="px-2">
          <button className="border border-black rounded-full px-4 py-1.5 hover:bg-emerald-50">
            Sign In
          </button>
        </li>
        <li className="px-2">
          <button
            className="
            border border-black rounded-full px-4 py-1.5 bg-black text-white hover:bg-gray-600"
          >
            Join Now
          </button>
        </li>
      </ul>
    </div>
  );
};
