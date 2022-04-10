import { render, screen } from '@testing-library/react';
import { TEST_CARD } from '../../../helpers/constants';
import { newCard } from '../../../helpers/TypeScript/interfaces';
import NewCard from './NewCard';

test('Card state test', () => {
  render(<NewCard card={TEST_CARD} />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  expect(img).toHaveProperty('src');
  expect(screen.getByText(/first name last name/i)).toHaveClass('card-title');
  expect(screen.getByText(/country/i));
  expect(screen.getByText(/birth date/i));
});
