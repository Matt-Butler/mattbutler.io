import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Home from './Home';

it('matches snapshot', () => {
  const wrapper = shallow(<Home />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
