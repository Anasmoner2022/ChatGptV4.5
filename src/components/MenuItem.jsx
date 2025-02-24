/**
 * Node module
 */
import PropTypes from 'prop-types';

const MenuItem = ({ classes = '', labelText, ...rest }) => {
  return (
    <button
      className={`menu-item ${classes}`}
      {...rest}
    >
      <span>{labelText}</span>
    </button>
  );
};

MenuItem.propTypes = {
  classes: PropTypes.string,
  labelText: PropTypes.string,
};

export default MenuItem;
