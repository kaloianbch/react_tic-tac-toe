import React from 'react';
import './App.css';

// TODO - how does the manifest.json work

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
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

/**
 * The tic tac toe game board component acts as a container for the board
 * squares and allows for them to be rendered in a 3x3 grid.
 */
class Board extends React.Component {
  /**
   * Creates a single square component within the board.
   * @param {number} i A as of yet unused number.
   * @return {Element} Returns a square component.
   */
  renderSquare(i) {
    return <Square />;
  }

  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Returns div containing 3 rows, each containing 3
   * numbered in order squares.
   */
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

/**
 * The Game component wraps around the Board component and will contain and
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

