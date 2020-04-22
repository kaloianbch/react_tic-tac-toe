import React from 'react';
import PropTypes from 'prop-types';
import '../css/Square.css';

/**
 * The square component renders the game board square.
 */
class Square extends React.Component {
  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Returns a stylized button.
   */
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
};

export default Square;
