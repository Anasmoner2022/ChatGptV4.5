/**
 * Node modules
 */
import { useNavigation, useNavigate, useLoaderData } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

/**
 * Custom modules
 */
import logout from '../utils/logout';

/**
 * Custom hooks
 */
import { useToggle } from '../hooks/useToggle';

/**
 * Component
 */
import { IconButton } from './Button';
import MainNavbar from './MainNavbar';
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import Menu from './Menu';
import { LinearProgress } from './Progress';
import { MenuIcon } from 'lucide-react';
import PropTypes from 'prop-types';

const TopAppBar = ({
  toggleSidebar,
}) => {
  /**
   * useNavigation: Provides navigation state (loading, idle, submitting, etc..)
   */
  const navigation = useNavigation();

  /**
   * useNavigate: Function for programmatically navigating between routes.
   */
  const navigate = useNavigate();

  /**
   * - user : User data for the currently logged-in user.
   */
  const { user } = useLoaderData();

  /**
   * Use a custom hook to manage the menu's show state.
   * 'showMenu' holds the current state,
   * and 'setShowMenu' is a function to toggle the menu.
   */
  const [showMenu, setShowMenu] = useToggle();

  /**
   * Check if the current navigation state is 'loading' and if there is no form data associated with the navigation.
   * This condition typically signifies a normal page load,
   * where the page is loading for the first time or is being reloaded with submitting a form.
   */
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex h-16 items-center justify-between px-4'>
      <div className='flex items-center gap-1'>
        <IconButton
          icon={
            <MenuIcon className='h-[1em] min-h-[1em] w-[1em] min-w-[1em] overflow-hidden' />
          }
          title='Menu'
          classes='lg:hidden'
          onClick={toggleSidebar}
        />
        <MainNavbar classes='lg:hidden' />
      </div>

      <div className='menu-wrapper'>
        <IconButton onClick={setShowMenu}>
          <Avatar
            name={user.name}
            imgClasses='rounded-full'
          />
        </IconButton>
        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItem
            labelText={'Logout'}
            onClick={() => logout(navigate)}
          />
        </Menu>
      </div>
      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

TopAppBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default TopAppBar;
