import React from 'react';
import Board from './Board';

/**
 * The Game component contains the game info and game board containers. For now.
 */
class Game extends React.Component {
  /**
   * Constructor method to be called whenever this component initialises.
   * Used to set the initial component state.
   * @param {Object} props Component properties to be used in the constructor.
   * These are passed through the DOM element.
   */
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Game container, which contains a single Board and
   * a container for the game information to be displayed in.
   * @see Board
   */
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export default Game;
