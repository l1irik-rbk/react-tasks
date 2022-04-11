import { render, screen } from '@testing-library/react';
import SearchButton from './SearchButton';

test('render serch button', () => {
  render(<SearchButton />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});
