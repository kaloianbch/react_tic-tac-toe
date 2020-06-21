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
   * Updates the board state when a player clicks a square and changes the
   * stored value for that square. Does nothing if the square is filled or if
   * the game is won.
   * @param {number} i Indicator of which square was clicked.
   */
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const newSquares = current.squares.slice();
    if (newSquares[i] || calculateWinner(newSquares)) {
      return;
    }

    newSquares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{squares: newSquares}]),
      xIsNext: !this.state.xIsNext,
    });
  }

  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Game container, which contains a single Board and
   * a container for the game information to be displayed in.
   * @see Board
   */
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className={'status'}>{status}</div>
          <ol>{/* TODO */}</ol>
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
// ========================================

export default Game;
