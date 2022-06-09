import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Test for the Calculator component', () => {
  test('renders Let us do some math!', () => {
    render(<Calculator />);
    const linkElement = screen.getByText(/Let us do some math!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
