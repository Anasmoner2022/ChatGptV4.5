import { Link } from 'react-router-dom';
import { LightLogo, DarkLogo } from '../assets/assets';

function AuthNavbar() {
  return (
    <Link
      to={'/'}
      className='mx-auto mb-auto max-w-max lg:mx-0'
    >
      <img
        src={DarkLogo}
        className='hidden dark:block'
        alt='Dark Logo'
        width={100}
      />
      <img
        src={LightLogo}
        className='dark:hidden'
        alt='Light Logo'
        width={100}
      />
    </Link>
  );
}

export default AuthNavbar;
