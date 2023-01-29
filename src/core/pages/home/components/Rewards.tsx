import Link from 'next/link';

export default function Rewards() {
  return (
    <article className='h-36 bg-green-light text-green-text font-medium text-center w-full max-w-[1200px]'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='pb-8'>
          <span>
            <strong>
              <p className='sm:text-xl'>Start fresh with IndioCoffee® Rewards</p>
            </strong>
          </span>
        </div>
        <div>
          <p><Link href='/' className='underline'>Join</Link> today to earn your way to free coffee and treats.*</p>
        </div>
      </div>
    </article>
  );
}