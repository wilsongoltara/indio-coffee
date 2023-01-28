import Link from 'next/link';

export default function Rewards() {
  return (
    <div className='flex flex-col justify-center items-center h-36 bg-green-light w-full text-green-text font-medium'>
      <div className='pb-8 '>
        <span>
          <strong>
            <p className='text-xl'>Start fresh with IndioCoffee® Rewards</p>
          </strong>
        </span>
      </div>
      <div>
        <p><Link href='/' className='underline'>Join</Link> today to earn your way to free coffee and treats.*</p>
      </div>
    </div>
  );
}