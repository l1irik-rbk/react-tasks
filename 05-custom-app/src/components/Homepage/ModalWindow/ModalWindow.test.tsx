import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IPerson } from '../../../helpers/TypeScript/interfaces';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  const fakePerson: IPerson | null = {
    name: 'Luke',
    birthYear: '112BBY',
    mass: 45,
    height: '148',
    gender: 'male',
    eyeColor: 'blue',
    hairColor: 'black',
    skinColor: 'white',
  };
  const nullFakePerson = null;
  const closeModalWindow = jest.fn();

  it('ModalWindow shows the children and a close btn', () => {
    render(<ModalWindow person={fakePerson} closeModalWindow={closeModalWindow} />);
    expect(screen.getByText('Luke')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText(/45/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('closeBtn'));
    expect(closeModalWindow).toHaveBeenCalledTimes(1);
  });

  it('shoud return if fakePerson equal null', () => {
    const { container } = render(
      <ModalWindow person={nullFakePerson} closeModalWindow={closeModalWindow} />
    );
    expect(container.firstChild).toBeNull();
  });
});
