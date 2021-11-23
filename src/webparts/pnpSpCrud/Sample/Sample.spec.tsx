import * as React from 'react';

import 'jest';
// import { createRenderer } from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
    Sample,
    ISampleProps
} from './Sample';

test('should render Sample component correctly', () => {
    const wrapper = shallow(<Sample />);
    expect(wrapper.find('span').text()).toBe('Hello world:');
    expect(wrapper.find('li').length).toBe(3);
    expect(wrapper).toMatchSnapshot();
});