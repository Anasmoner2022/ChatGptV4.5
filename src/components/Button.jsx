import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Loader2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon = null,
  className = '',
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition duration-200 ease-in-out rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary:
      'text-white bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary border border-transparent rounded shadow-sm',
    secondary:
      'text-black bg-gray-100 border border-gray-200 rounded shadow-sm hover:bg-gray-200 focus:ring-gray-500',
    destructive:
      'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600 focus:ring-red-500',
    outline:
      'text-black bg-transparent border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:ring-gray-500',
    ghost:
      'text-black bg-transparent border border-transparent rounded shadow-sm hover:bg-gray-100 focus:ring-gray-500',
    link: 'bg-transparent border-none rounded shadow-none hover:underline focus:ring-gray-500',
    withIcon:
      'text-white bg-light-surfaceDim dark:bg-dark-surfaceBright border border-transparent rounded shadow-sm hover:bg-gray-700 focus:ring-gray-500 flex justify-center gap-2',
  };
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    none: '',
  };
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const loadingStyles =
    'text-white bg-gray-300 border border-transparent rounded shadow-sm cursor-wait focus:ring-gray-500 flex justify-center gap-2';

  const buttonClass = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled || loading ? disabledStyles : '',
    loading ? loadingStyles : '',
    className,
  );

  //classNames or tailwind marge

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={!loading ? onClick : null}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <span className='flex items-center gap-2'>
          <Loader2
            size={24}
            className='animate-spin'
          />
          Loading...
        </span>
      ) : (
        <span className='flex items-center gap-2'>
          {icon && <span className='icon'>{icon}</span>}
          {children}
        </span>
      )}
    </button>
  );
};

/**
 * Icon Button
 */
const IconButton = ({ classes = '', icon, size = '', children, ...rest }) => {
  return (
    <motion.button
      className={`icon-btn ${size} ${classes}`}
      {...rest}
    >
      {children}

      {!children && <span className='icon'>{icon}</span>}

      <div className='state-layer'></div>
    </motion.button>
  );
};

/**
 * Extended Fab
 */
const ExtendedFab = ({ href, text, classes = '', ...rest }) => {
  return (
    <Link
      to={href}
      className={`extended-fab ${classes}`}
      {...rest}
    >
      <span className='inline-block'>
        <Plus />
      </span>
      <span className='truncate'>{text}</span>
      <span className='state-layer'></span>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'destructive',
    'outline',
    'ghost',
    'link',
    'withIcon',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  className: '',
  icon: null,
};

IconButton.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.string,
  children: PropTypes.node,
};

ExtendedFab.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string,
};

export { Button, IconButton, ExtendedFab };
