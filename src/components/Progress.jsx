/**
 * Node modules
 */
import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const LinearProgress = ({ classes = '' }) => {
  // Defines Framer Motion Variants for animating a progress bar and an active indicator.
  const progressbarVariants = {
    start: { scaleY: 0 },
    end: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const activeIndicatorVariants = {
    start: { translateX: '-100%' },
    end: { translateX: '0%' },
  };

  return (
    <motion.div
      role='progressbar'
      variants={progressbarVariants}
      initial='start'
      animate='end'
      exit='exit'
      className={`linear-progress ${classes}`}
    >
      <motion.div
        variants={activeIndicatorVariants}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.2, 0, 0, 1],
        }}
        className='active-indicator'
      ></motion.div>
    </motion.div>
  );
};

LinearProgress.propTypes = {
  classes: PropTypes.string,
};

const CircularProgress = () => {
  return <div>Progress</div>;
};

export { LinearProgress, CircularProgress };
