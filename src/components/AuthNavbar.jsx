import { Link } from 'react-router-dom';
import { LightLogo, DarkLogo } from '../assets/assets';

function AuthNavbar() {
  return (
    <Link
      to={'/'}
      className='mx-auto mb-5 w-20 pb-4 md:w-24 lg:mx-0 lg:w-32'
    >
      <img
        src={DarkLogo}
        className='hidden dark:block'
        alt='Dark Logo'
      />
      <img
        src={LightLogo}
        className='dark:hidden'
        alt='Light Logo'
      />
    </Link>
  );
}

export default AuthNavbar;
