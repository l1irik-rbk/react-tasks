import { render, screen, fireEvent } from '@testing-library/react';
import { fakeStore } from '../../../helpers/TypeScript/interfaces';
import Search from './Search';

describe('Input component', () => {
  test('render input', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText(/what're you searching for/i);

    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { value: 'Something' },
    });
  });
});

describe('local storage', () => {
  const fakeLocalStorage = (function () {
    let store: fakeStore = {};

    return {
      getItem: function (key: string) {
        return store[key] || null;
      },
      setItem: function (key: string, value: string) {
        store[key] = value;
      },
      removeItem: function (key: string) {
        delete store[key];
      },
      clear: function () {
        store = {};
      },
    };
  })();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('saves the key to the storage', () => {
    window.localStorage.setItem('the-key', 'fake-value');
    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });
});
