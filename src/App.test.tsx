import React from 'react';
import {
  render,
  fireEvent,
  screen,
  queryByAttribute,
} from '@testing-library/react';
import App from './App';

const getById = queryByAttribute.bind(null, 'id');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Super Calculadora Sumadora "Dora"/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const dom = render(<App />);
  fireEvent.change(getById(dom.container, /numA/i), {
    target: { value: '5' },
  });
  fireEvent.change(getById(dom.container, /numB/i), {
    target: { value: '3' },
  });
  fireEvent.click(screen.getByText(/Sumar/i));
  expect(getById(dom.container, /total/i).value).toBe('8');
});
