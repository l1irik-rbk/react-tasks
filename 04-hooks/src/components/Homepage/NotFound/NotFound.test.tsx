import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
// import { HOUSES } from '../../../helpers/constants';

describe('NotFound', () => {
  it('shoud show message', () => {
    render(<NotFound />);

    expect(
      screen.getByText(/you need to type name of hero from star wars films/i)
    ).toBeInTheDocument();
  });
});
