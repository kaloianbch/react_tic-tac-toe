import React from 'react';
import PropTypes from 'prop-types';
import '../css/Square.css';

/**
 * Function component which creates squares which will be managed by the board.
 * @param {Object} props Properties which are passed via the DOM element
 * deceleration.
 * @return {Element} returns a stylized button whose text is updated through a
 * onClick function.
 */
const Square = (props) => {
  return (
    <button className={'square'} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
