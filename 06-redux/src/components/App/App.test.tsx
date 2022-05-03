import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  // test('test router', () => {
  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   const homeLink = screen.getByTestId('home-link');
  //   const aboutLink = screen.getByTestId('about-link');
  //   userEvent.click(aboutLink);
  //   expect(screen.getByTestId('about-page')).toBeInTheDocument();
  //   userEvent.click(homeLink);
  //   expect(screen.getByTestId('home-page')).toBeInTheDocument();
  // });

  test('test error page', () => {
    render(
      <MemoryRouter initialEntries={['/asdasda']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
