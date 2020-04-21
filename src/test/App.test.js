import React from 'react';
import App from '../components/App';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../components/Board';
configure({adapter: new Adapter()});

const wrapper = shallow(<App/>);

describe('App Component Suite', () => {
  it('has a main container for the app', () => {
    expect(wrapper.find('.game').find('.game-board').length).toBe(1);
  });
  it('has a game board and game info container', () => {
    expect(wrapper.find('.game').find('.game-board').length).toBe(1);
    expect(wrapper.find('.game').find('.game-info').length).toBe(1);
  });
  it('has a single board component inside the board container', () => {
    expect(wrapper.find('.game-board').children().length).toBe(1);
    expect(wrapper.find('.game-board').childAt(0).type()).toBe(Board);
  });
});
