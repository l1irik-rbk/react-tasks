import { render, screen, fireEvent } from '@testing-library/react';
import { fakeStore } from '../../../helpers/TypeScript/interfaces';
import Search from './Search';

describe('Input component', () => {
  test('render input', () => {
    const onInputChange = jest.fn();
    render(<Search searchValue="Something" onInputChange={onInputChange} />);
    const input = screen.getByPlaceholderText(/you need to type name of hero/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { value: 'New value' },
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
