import React from 'react';
import Board from '../components/Board';

import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from '../components/Square';
configure({adapter: new Adapter()});

const wrapper = mount(<Board/>);

describe('Board Component Suite', () => {
  it('renders 3 containers to act as rows', () => {
    console.log(wrapper.find('.board-row'));
    expect(wrapper.find('.board-row').length).toBe(3);
  });

  it('displays a static text for turn order', () => {
    expect(wrapper.find('.status').text()).toBe('Next player: X');
  });

  it('renders 3 row containers with 3 squares in each container', () => {
    wrapper.find('.board-row').forEach((row) => {
      expect(row.children().length).toBe(3);
      row.children().forEach(function(node) {
        expect(node.type()).toEqual(Square);
      });
    });
  });
});
