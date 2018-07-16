import React from 'react';
import { Link, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Home from './components/Home';

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/page1">Page 1</Link>
      </li>
      <li>
        <Link to="/page2">Page 2</Link>
      </li>
    </ul>
    <Route path="/home" component={Home} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </div>
);

export default App;
