import Hero from './components/Hero';
import Rewards from './components/Rewards';
import {heros} from '~/core/lib/hero';

export default function HomePage() {
  return(
    <div className='flex flex-col items-center'>
      <Rewards />
      <Hero {...heros.dayBoosters} />
      <Hero {...heros.dayBreak} />
      <Hero {...heros.yourFavorites} />
      <div className='mt-10 mb-5'>*At participating stores.</div>
    </div>
  );
}
