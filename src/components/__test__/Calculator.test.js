import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';
import calculate from '../../logic/calculate';

describe('Should enable user interaction', () => {
  test('Simulate if input is a number', () => {
    render(<Calculator />);
    const numb = screen.getByText('3');
    const output = screen.getByRole('button', { name: numb.textContent });
    fireEvent.click(numb);
    expect(output.textContent).toBe('3');
  });

  test('Simulate an operation', () => {
    render(<Calculator />);
    const addSymbol = screen.getByText('+');
    const output = screen.getByRole('button', { name: addSymbol.textContent });
    fireEvent.click(addSymbol);
    expect(output.textContent).toBe('+');
  });
});

describe('Validate `calculate` functions', () => {
  const num = { total: null, next: null, operation: null };
  test('Addition', () => {
    let result = calculate(num, '10');
    result = calculate(result, '+');
    result = calculate(result, '4');
    result = calculate(result, '=');
    expect(result.total).toBe('14');
  });

  test('Subtraction', () => {
    let result = calculate(num, '10');
    result = calculate(result, '-');
    result = calculate(result, '4');
    result = calculate(result, '=');
    expect(result.total).toBe('6');
  });

  test('Multiplication', () => {
    let result = calculate(num, '10');
    result = calculate(result, 'x');
    result = calculate(result, '4');
    result = calculate(result, '=');
    expect(result.total).toBe('40');
  });

  test('Divide by Zero (0)', () => {
    let result = calculate(num, '10');
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(result.total).toBe('Can\'t divide by 0.');
  });

  test('Modular', () => {
    let result = calculate(num, '10');
    result = calculate(result, '%');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('0');
  });
})