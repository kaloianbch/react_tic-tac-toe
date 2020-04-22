import React from 'react';
import PropTypes from 'prop-types';
import '../css/Square.css';

/**
 * The square component renders the game board square.
 */
class Square extends React.Component {
  /**
   * Constructor method to be called whenever this component initialises.
   * Used to set the initial component state
   * @param {Object} props Component properties to be used in the constructor.
   * These are passed through the DOM element.
   */
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Returns a stylized button.
   */
  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
};

export default Square;
