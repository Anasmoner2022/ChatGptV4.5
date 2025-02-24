/**
 * Node modules
 */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Assets
 */
import { LightLogo, DarkLogo } from '../assets/assets';

function MainNavbar({ classes = '' }) {
  return (
    <Link
      to={'/'}
      className={`max-w-max h-[45px] min-w-max ${classes}`}
    >
      <img
        src={LightLogo}
        className='dark:hidden'
        alt='Light Logo'
        width={150}
      />
      <img
        src={DarkLogo}
        className='hidden dark:block'
        alt='Dark Logo'
        width={124}
      />
    </Link>
  );
}

MainNavbar.propTypes = {
  classes: PropTypes.string,
};

export default MainNavbar;
