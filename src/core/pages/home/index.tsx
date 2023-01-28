import Hero from './components/Hero';
import Rewards from './components/Rewards';

const heroData = {
  bgHero: 'bg-[#96B2E1]',
  hrefImage: '/hero-1.png',
  titleHero: 'Day boosters',
  descriptionHero: 'Recharge with a bold and lively Iced Shaken Espresso or Iced Brown Sugar Oatmilk Shaken Espresso.', 
  buttonHero: 'Order now',
};

export default function HomePage() {
  return(
    <div className='flex flex-col items-center'>
      <Rewards />
      <Hero {...heroData} />
      <Hero order {...heroData} />
      <Hero {...heroData} />
    </div>
  );
}
