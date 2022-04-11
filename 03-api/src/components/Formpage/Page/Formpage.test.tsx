import { render, screen } from '@testing-library/react';
import Formpage from './Formpage';

describe('Formpage component', () => {
  test('Formpage at the page', () => {
    render(<Formpage />);
    expect(screen.getByText(/information about you/i));
  });
});
