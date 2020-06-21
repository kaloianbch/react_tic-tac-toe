import React from 'react';
import Board from '../components/Board';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from '../components/Square';
configure({adapter: new Adapter()});

describe('Board Component Initial State Suite', () => {
  it('renders 3 containers to act as rows', () => {
    const wrapper = shallow(<Board
      squares={Array(9).fill(null)}
      onClick={jest.fn}
    />);

    expect(wrapper.find('.board-row').length).toBe(3);
  });

  it('renders 3 row containers with 3 squares in each container', () => {
    const wrapper = shallow(<Board
      squares={Array(9).fill(null)}
      onClick={jest.fn}
    />);

    wrapper.find('.board-row').forEach((row) => {
      expect(row.children().length).toBe(3);
      row.children().forEach(function(node) {
        expect(node.type()).toStrictEqual(Square);
      });
    });
  });
});


describe('Board Functionality Suite', () => {
  it('it doesn\'t let players overwrite filled in squares', () => {
    const wrapper = shallow(<Board
      squares={Array(9).fill(null)}
      onClick={jest.fn}
    />);
    wrapper.setState({
      squares: Array(9).fill('X'),
      xIsNext: false,
    });
    wrapper.childAt(1).childAt(1).simulate('click');
    expect(wrapper.state('squares')).toStrictEqual(Array(9).fill('X'));
  });

  it('stops accepting clicks once a winner is declared', () => {
    const wrapper = shallow(<Board
      squares={Array(9).fill(null)}
      onClick={jest.fn}
    />);
    const squaresState = [null, null, null, 'X', 'X', 'X', null, null, null];
    wrapper.setState({
      squares: squaresState,
      xIsNext: true,
    });
    wrapper.childAt(1).childAt(1).simulate('click');
    expect(wrapper.state('squares')).toStrictEqual(squaresState);
  });
});


describe('Board to Square Prop Suite', () => {
  it('passes a array value from the state to the corresponding square ' +
    'as a value prop', () => {
    const wrapper = mount(<Board
      squares={Array(9).fill(null)}
      onClick={jest.fn}
    />);
    const testState = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const res = [];
    wrapper.setProps({squares: testState});
    wrapper.find('.board-row').forEach((row) => {
      row.children().forEach(function(node) {
        res.push(node.props().value);
      });
    });
    expect(res).toStrictEqual(testState);
  });

  it('passes an onclick handler function to all child squares', () => {
    const spy = jest.fn();
    const wrapper = mount(<Board
      squares={Array(9).fill(null)}
      onClick={spy}
    />);
    wrapper.find('.board-row').forEach((row) => {
      row.children().forEach(function(node) {
        node.simulate('click');
      });
    });
    expect(spy).toBeCalledTimes(9);
    spy.mockClear();
  });
});
