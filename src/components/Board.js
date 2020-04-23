import React from 'react';
import '../css/Board.css';
import Square from './Square';
/**
 * The tic tac toe game board component acts as a container for the board
 * squares and allows for them to be rendered in a 3x3 grid.
 */
class Board extends React.Component {
  /**
   * Constructor method to be called whenever this component initialises.
   * Used to set the initial component state.
   * @param {Object} props Component properties to be used in the constructor.
   * These are passed through the DOM element.
   */
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  /**
   * Updates the board state when a player clicks a square and changes the
   * stored value for that square.
   * @param {number} i Indicator of which square was clicked.
   */
  handleClick(i) {
    const newSquares = this.state.squares.slice();
    newSquares[i] = 'X';
    this.setState({squares: newSquares});
  }
  /**
   * Creates a single square component within the board.
   * @param {number} i A as of yet unused number.
   * @return {Element} Returns a square component.
   */
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
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

export default Board;
