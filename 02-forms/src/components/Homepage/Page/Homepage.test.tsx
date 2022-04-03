import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('homepage', () => {
  test('render homepage', () => {
    render(<Homepage />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
