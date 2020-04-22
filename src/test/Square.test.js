import React from 'react';
import Square from '../components/Square';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Square Component Suite', () => {
  it('renders a single button with the class name square', () => {
    const wrapper = mount(<Square/>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.childAt(0).type()).toEqual('button');
    expect(wrapper.childAt(0).hasClass('square')).toEqual(true);
  });

  it('it displays a passed value prop as as text on the button', () => {
    const wrapper = shallow(<Square value='test'/>);
    expect(wrapper.text()).toEqual('test');
  });

  it('creates an alert when clicked on', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<Square/>);

    wrapper.find('.square').simulate('click');
    expect(window.alert).toBeCalledTimes(1);
    expect(window.alert).toBeCalledWith('click');
  });
});
