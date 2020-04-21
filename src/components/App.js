import React from 'react';
import '../css/App.css';
import Board from './Board';

// TODO - how does the manifest.json work

/**
 * The App component wraps around the Board component and will contain and
 * display information about the game, probably.
 */
class Game extends React.Component {
  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Game container, which contains a single board and
   * a container for the game information to be displayed in.
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

