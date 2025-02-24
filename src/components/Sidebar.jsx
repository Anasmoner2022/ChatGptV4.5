/**
 * Node Modules
 */
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
/**
 * Components
 */
import MainNavbar from './MainNavbar';
import { ExtendedFab, IconButton } from './Button';
import { NavLink } from 'react-router-dom';
import { Delete, MessageSquareMore } from 'lucide-react';

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.2, ease: 'easeOut' }} className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className='sidebar-inner'>
          <div className='mb-4 grid h-16 items-center px-4'>
            {/* Logo */}
            <MainNavbar />
          </div>

          <ExtendedFab
            text='New Chat'
            classes=''
            href='/'
            onClick={toggleSidebar}
          />

          <div className='-me-2 overflow-y-auto pe-1'>
            <p className='grid h-9 items-center px-4 text-titleSmall'>Recent</p>

            <nav>
              <div className='group relative'>
                <NavLink
                  to='/'
                  className='nav-link'
                  title=''
                  onClick={toggleSidebar}
                >
                  <span className='icon-small inline-block'>
                    <MessageSquareMore />
                  </span>
                  <span className='truncate'>New conversation</span>
                
                </NavLink>
                
                <IconButton
                  icon={<Delete />}
                  size='small'
                  classes='absolute right-1.5 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                  title='Delete'
                />
              </div>
            </nav>
          </div>
          <div className='mt-4 grid h-14 items-center truncate border-t border-light-surfaceContainerHigh px-4 text-labelLarge text-light-onSurfaceVariant dark:border-dark-surfaceContainerHigh dark:text-dark-onSurfaceVariant'>&copy; 2025 codeWithAstra</div>
        </div>
      </motion.div>
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
