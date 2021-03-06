import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App';

it('matches snapshot', () => {
  const wrapper = shallow(<App />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
