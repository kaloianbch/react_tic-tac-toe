import React from 'react';
import Game from '../components/Game';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../components/Board';
configure({adapter: new Adapter()});


describe('Game Component Initial Suite', () => {
  it('has a main container for the game', () => {
    const wrapper = shallow(<Game/>);


    expect(wrapper.find('.game').find('.game-board').length).toBe(1);
  });
  it('has a game board and game info container', () => {
    const wrapper = shallow(<Game/>);


    expect(wrapper.find('.game').find('.game-board').length).toBe(1);
    expect(wrapper.find('.game').find('.game-info').length).toBe(1);
  });
  it('has a single board component inside the board container', () => {
    const wrapper = shallow(<Game/>);

    expect(wrapper.find('.game-board').children().length).toBe(1);
    expect(wrapper.find('.game-board').childAt(0).type()).toBe(Board);
  });

  it('initializes with a default state', () => {
    const wrapper = shallow(<Game/>);
    expect(wrapper.state('history')).toStrictEqual([{
      squares: Array(9).fill(null),
    }]);
    expect(wrapper.state('xIsNext')).toStrictEqual(true);
  });

  it('displays text indicating the turn order', () => {
    const wrapper = shallow(<Game/>);

    expect(wrapper.find('.status').text()).toBe('Next player: X');
  });
});


describe('Game Component Functionality Suite', ()=>{
  it('updates the current player state bool when a square is clicked on',
      () => {
        const xIsNextRes = [];
        const expXIsNextRes = [false, true, false];
        const wrapper = mount(<Game/>);

        wrapper.find(Board).childAt(0).childAt(0).children().forEach(
            function(node) {
              node.simulate('click');
              xIsNextRes.push(wrapper.state('xIsNext'));
            });
        expect(xIsNextRes).toStrictEqual(expXIsNextRes);
      });

  it('updates the player turn indicator', () => {
    const wrapper = shallow(<Game/>);
    expect(wrapper.find('.status').text()).toBe('Next player: X');
    wrapper.setState({
      squares: Array(9).fill(null),
      xIsNext: false,
    });
    expect(wrapper.find('.status').text()).toBe('Next player: O');
  });

  it('declares a winner when a set of winning lines is present', () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < 7; i++) { // Loop once for each possible win state
      const testSquares = Array(9).fill(null);

      for (let j = 0; j < winningLines[i].length; j++) { // Set a win state
        // Test for either player working as a valid winner
        testSquares[winningLines[i][j]] = i % 2 === 0 ? 'X' : 'O';
      }

      const wrapper = shallow(<Game/>);
      wrapper.setState({
        history: [{
          squares: testSquares,
        }],
        xIsNext: i % 2 === 0,
      });
      expect(wrapper.find('.status').text()).toBe(
          'Winner: ' + (i % 2 === 0 ? 'X' : 'O'));
    }
  });

  it('updates a square components value property when clicked', () => {
    const valRes = [];
    const expValRes = ['X', 'O', 'X', null, null, null, null, null, null];
    const wrapper = mount(<Game/>);

    /* goes through only the first row to avoid having a win state, which would
       break the test. */
    wrapper.find(Board).childAt(0).childAt(0).children().forEach(
        function(node) {
          node.simulate('click');
        });

    /* loop around a second time to get the props because they don't update
       in time for some reason. */
    wrapper.find('.board-row').forEach((row) => {
      row.children().forEach(function(node) {
        valRes.push(node.props().value);
      });
    });
    expect(valRes).toStrictEqual(expValRes);
  });
});
