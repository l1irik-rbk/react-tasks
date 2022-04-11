import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('header', () => {
  test('render header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-link')).toBeInTheDocument();
    expect(screen.getByTestId('about-link')).toBeInTheDocument();
  });
});
