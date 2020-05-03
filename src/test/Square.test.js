import React from 'react';
import Square from '../components/Square';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Square Component Initial Suite', () => {
  it('renders a single button with the class name square', () => {
    const wrapper = mount(<Square/>);

    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.childAt(0).type()).toEqual('button');
    expect(wrapper.childAt(0).hasClass('square')).toEqual(true);
  });
});

describe('Square Prop Suite', () => {
  it('can be passed an onClick function as a prop', () => {
    const func = jest.fn();
    const wrapper = shallow(<Square onClick={func}/>);
    wrapper.find('.square').simulate('click');
    expect(func).toBeCalledTimes(1);
  });

  it('will display a value prop as text within the button', () =>{
    const wrapper = shallow(<Square value={'test'}/>);
    expect(wrapper.childAt(0).text()).toEqual('test');
  });
});
