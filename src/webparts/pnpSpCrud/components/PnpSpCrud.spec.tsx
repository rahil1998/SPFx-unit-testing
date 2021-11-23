import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { PnpSpCrud } from './PnpSpCrud';


test('should render PnpSpCrud component correctly', () => {
    const wrapper = shallow(<PnpSpCrud description="some description" />);

    expect(wrapper.find('label').text()).toBe('Hello world:');
    expect(wrapper.find('td').length).toBe(5);
    expect(wrapper).toMatchSnapshot();
});