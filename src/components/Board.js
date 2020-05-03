import React from 'react';
import '../css/Board.css';
import Square from './Square';

// TODO - dynamic size, through state, maybe through setup screen later.

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
      xIsNext: true,
    };
  }

  /**
   * Updates the board state when a player clicks a square and changes the
   * stored value for that square. Does nothing if the square is filled or if
   * the game is won.
   * @param {number} i Indicator of which square was clicked.
   */
  handleClick(i) {
    const newSquares = this.state.squares.slice();
    if (newSquares[i] || calculateWinner(newSquares)) {
      return;
    }

    newSquares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
    });
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
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
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
 * Compares board state to seven possible winning states.
 * @param {String[]} squares Current board state
 * @return {null|String} Returns null if there is no current winner and the
 * winners character otherwise
 * @see Squares
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
