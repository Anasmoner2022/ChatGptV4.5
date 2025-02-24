/**
 * Node modules
 */
import PropTypes from 'prop-types';

const Menu = ({ children, classes = '' }) => {
  return <div className={`menu ${classes}`}>{children}</div>;
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};

export default Menu;
