import { render, screen } from '@testing-library/react';
import { HOUSES } from '../../../helpers/constants';
import CardsList from './CardsList';

describe('cards list', () => {
  test('render CardsList', () => {
    render(<CardsList houses={HOUSES} />);
    const housesNumber = screen.getAllByTestId('house').length;
    expect(housesNumber).toEqual(HOUSES.length);
    expect(screen.getAllByRole('img')[1]).toBeInTheDocument();
    expect(screen.getAllByAltText(/house/i)[1]).toHaveClass('house-image');
  });
});
