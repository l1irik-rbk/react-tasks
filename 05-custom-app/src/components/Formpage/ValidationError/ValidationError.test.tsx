import { render, screen } from '@testing-library/react';
import ValidationError from './ValidationError';

test('Validation error text at the page', () => {
  render(<ValidationError errorMessage="Some error text" />);
  expect(screen.getByText(/some error text/i)).toBeInTheDocument();
});
