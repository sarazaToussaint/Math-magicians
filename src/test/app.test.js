import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App';

// Mock home functional component
const TestApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Test
it('Renders Correctly', () => {
  const AppTester = renderer.create(<TestApp />).toJSON();
  expect(AppTester).toMatchSnapshot();
});
