import { BsFacebook, BsInstagram, BsPinterest, BsSpotify, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Icons() {
  return (
    <div className='flex justify-between w-1/3'>
      <BsFacebook size='25px'/>
      <BsSpotify size='25px' />
      <BsPinterest size='25px' />
      <BsInstagram  size='25px' />
      <BsYoutube size='25px' />
      <BsTwitter size='25px' />
    </div>
  );
}
