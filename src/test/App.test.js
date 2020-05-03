import React from 'react';
import App from '../components/App';
import Game from '../components/Game';

import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('App Component Suite', () => {
  it('renders a Game component', () => {
    const wrapper = mount(<App/>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.childAt(0).type()).toEqual(Game);
  });
});
