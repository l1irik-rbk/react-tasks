import { render, screen } from '@testing-library/react';
import Aboutpage from './Aboutpage';

test('render about page', () => {
  render(<Aboutpage />);
  const pageHeader = screen.getByText(/about us/i);
  expect(pageHeader).toBeInTheDocument();
});
