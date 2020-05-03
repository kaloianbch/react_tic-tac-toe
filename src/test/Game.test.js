import React from 'react';
import Game from '../components/Game';

import {configure, shallow} from 'enzyme';
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
});
