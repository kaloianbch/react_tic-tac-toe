import React from 'react';
import Board from './Board';

/**
 * The Game component contains the game info and game board containers. For now.
 */
class Game extends React.Component {
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
