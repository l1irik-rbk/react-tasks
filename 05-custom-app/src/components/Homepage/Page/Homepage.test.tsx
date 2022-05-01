import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Homepage from './Homepage';

describe('homepage', () => {
  // test('render home page', () => {
  //   render(<Homepage />);
  //   expect(screen.getByText(/star wars heroes/i)).toBeInTheDocument();
  //   expect(screen.getByTestId('spinner')).toBeInTheDocument();
  // });
  // test('fetch and display people', async () => {
  //   const { findByText } = render(<Homepage />);
  //   await waitForElementToBeRemoved(screen.getByTestId('spinner'));
  //   expect(await findByText('Luke Skywalker')).toBeInTheDocument();
  // });
  // test('show and close modal window', async () => {
  //   const { findByText } = render(<Homepage />);
  //   expect(await findByText('Luke Skywalker')).toBeInTheDocument();
  //   fireEvent.click(screen.getByTestId('personCard'));
  //   const modalWindow = screen.getByTestId('cardWindow');
  //   expect(modalWindow).toBeInTheDocument();
  //   fireEvent.click(screen.getByTestId('closeBtn'));
  //   expect(modalWindow).not.toBeInTheDocument();
  // });
  // test('find a person', async () => {
  //   const { findByText } = render(<Homepage />);
  //   const input = screen.getByPlaceholderText(/you need to type name of hero/i);
  //   userEvent.type(input, 'r2-d2{enter}');
  //   expect(await findByText('r2-d2')).toBeInTheDocument();
  // });
  // test('can not find a person', async () => {
  //   const { findByText } = render(<Homepage />);
  //   const input = screen.getByPlaceholderText(/you need to type name of hero/i);
  //   expect(input).toBeInTheDocument();
  //   userEvent.type(input, 'asd{enter}');
  //   expect(
  //     await findByText(/you need to type name of hero from star wars films/i)
  //   ).toBeInTheDocument();
  // });
});
