import React from 'react';
import Square from '../components/Square';

import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

const wrapper = mount(<Square/>);


describe('Square Component Suite', () => {
  it('renders a single button with the class name square', () => {
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.childAt(0).hasClass('square')).toEqual(true);
  });
});
