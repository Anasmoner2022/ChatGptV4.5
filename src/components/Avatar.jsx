/**
 * Node Modules
 */
import PropTypes from 'prop-types';

/**
 * Custom Modules
 */
import { avatars } from '../lib/appwrite';

const Avatar = ({ name, imgClasses = '' }) => {
  return (
    <figure className='avatar'>
      <img
        src={avatars.getInitials(name, 48, 48)}
        alt={name}
        className={`${imgClasses}`}
        width={48}
        height={48}
      />
    </figure>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  imgClasses: PropTypes.string,
};

export default Avatar;
