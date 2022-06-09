import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

// Mock home functional component
const TestHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

// Test
it('Renders Correctly', () => {
  const HomeTester = renderer.create(<TestHome />).toJSON();
  expect(HomeTester).toMatchSnapshot();
});
