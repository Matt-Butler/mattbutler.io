import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Page1 from './Page1';

it('matches snapshot', () => {
  const wrapper = shallow(<Page1 />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
