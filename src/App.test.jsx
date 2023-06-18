import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tokei title', () => {
  render(<App />);
  const linkElement = screen.getByText(/時計/i);
  expect(linkElement).toBeInTheDocument();
});
