import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component', () => {
  test('Render form at the page', () => {
    render(<Form />);
    expect(screen.getByLabelText(/your birth date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/profile picture/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/i want to receive notifications/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/i agree to the processing of personal data/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeTruthy();
  });

  test('Show an error', () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('firstName'), '1a');
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });

  test('Render new card on submit', async () => {
    render(<Form />);

    global.URL.createObjectURL = jest.fn();

    const button = screen.getByRole('button') as HTMLButtonElement;
    const firstNameInput = screen.getByTestId('firstName') as HTMLInputElement;
    const lastNameInput = screen.getByTestId('lastName') as HTMLInputElement;
    const birthdayNameInput = screen.getByTestId('birthday') as HTMLInputElement;
    const countryOption = screen.getByTestId('country') as HTMLOptionElement;
    const acceptInput = screen.getByTestId('accept') as HTMLInputElement;

    const pictureInput = screen.getByTestId('picture') as HTMLInputElement;
    const fakeFile = new File(['(⌐□_□)'], 'chucknorris.jpg', { type: 'image/jpeg' });

    userEvent.type(firstNameInput, 'asds');
    userEvent.type(lastNameInput, 'asd');
    userEvent.type(birthdayNameInput, '2022-04-01');
    userEvent.type(countryOption, 'Russia');
    userEvent.upload(pictureInput, fakeFile);

    fireEvent.click(acceptInput);
    expect(acceptInput.checked).toEqual(true);

    fireEvent.click(button);
    expect(button).toHaveBeenCalledTimes(1);
  });

  test('asd', () => {
    render(<Form />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    const firstNameInput = screen.getByTestId('firstName') as HTMLInputElement;
    userEvent.type(firstNameInput, '1s');

    fireEvent.click(button);
    expect(button.disabled).toBeTruthy();
  });
});
