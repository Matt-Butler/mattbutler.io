import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Page2 from './Page2';

it('matches snapshot', () => {
  const wrapper = shallow(<Page2 />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
