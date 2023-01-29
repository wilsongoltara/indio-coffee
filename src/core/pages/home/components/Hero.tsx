import Image from 'next/image';
import { HeroProps } from '~/core/interfaces/props';

export default function Hero({
  bgHero,
  buttonHero,
  descriptionHero,
  hrefImage,
  titleHero,
  order
}: HeroProps
) {
  return (
    <section className={bgHero + ' mt-8 flex flex-col md:flex-row md:items-center'}>
      <div className={`flex justify-center w-full md:w-1/2 h-[70%] ${order ?? 'md:order-2'}`}>
        <Image src={hrefImage} alt='ice coffee' width={764} height={764} />
      </div>
      <div className='flex justify-center text-center h-60 font-medium text-green-text md:w-1/2'>
        <div className='max-w-md flex flex-col items-center justify-between px-1 py-5 h-full'>
          <h2 className='text-3xl font-semibold'>{titleHero}</h2>
          <p className='text-xl'>{descriptionHero}</p>
          <button className='border rounded-3xl px-3 py-1 border-black hover:bg-slate-400'>{buttonHero}</button>
        </div> 
      </div>
    </section>
  );
}
