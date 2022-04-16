import { fireEvent, render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('homepage', () => {
  test('render home page', () => {
    render(<Homepage />);
    screen.debug();
    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
    // const showModalWindow = jest.fn();
    // fireEvent.click(screen.getByTestId('personCard'));
    // expect(screen.getByTestId('cardWindow')).toBeInTheDocument();
    // // expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  // test('close modal window', () => {
  //   render(<Homepage />);
  //   // expect(screen.getByText(/home/i)).toBeInTheDocument();
  // });
});
