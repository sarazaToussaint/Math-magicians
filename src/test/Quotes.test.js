import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

const QuoteTest = () => {
  <BrowserRouter>
    <Quote />
  </BrowserRouter>;
};

it('Renders correctly', () => {
  const TestQuotes = renderer.create(<QuoteTest />).toJSON();
  expect(TestQuotes).toMatchSnapshot();
});