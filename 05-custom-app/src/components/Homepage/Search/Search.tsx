import React, { useEffect } from 'react';
import { SearchProp } from '../../../helpers/TypeScript/types';
import SearchButton from '../SearchButton/SearchButton';

const Search = ({ onInputChange, searchValue }: SearchProp) => {
  const InputChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(e.currentTarget.value);
  };

  useEffect(() => {
    const storageValue = (localStorage.getItem('inputValue') as string) || '';
    onInputChange(storageValue);

    return () => {
      localStorage.setItem('inputValue', searchValue);
    };
  }, []);

  return (
    <>
      <div className="input-group mb-4">
        <input
          type="search"
          placeholder="You need to type name of hero from star wars films. Luke, R2 and etc... "
          aria-describedby="button-addon5"
          className="form-control"
          value={searchValue}
          onChange={InputChange}
        />
        <SearchButton />
      </div>
    </>
  );
};

export default Search;
