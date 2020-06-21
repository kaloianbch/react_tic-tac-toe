import React from 'react';
import PropTypes from 'prop-types';
import '../css/Board.css';
import Square from './Square';

// TODO - dynamic size, through state, maybe through setup screen later.

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
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Returns div containing 3 rows, each containing 3
   * numbered in order squares.
   */
  render() {
    return (
      <div>
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

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default Board;
