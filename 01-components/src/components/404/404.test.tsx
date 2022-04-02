import { render, screen } from '@testing-library/react';
import Errorpage from './404';

test('render 404 page', () => {
  render(<Errorpage />);
  const pageHeader = screen.getByText(/error 404/i);
  expect(pageHeader).toBeInTheDocument();
});
