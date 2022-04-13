import React from 'react';
import { SearchProp } from '../../../helpers/TypeScript/types';
import SearchButton from '../SearchButton/SearchButton';

class Search extends React.Component<SearchProp, object> {
  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onInputChange(e.currentTarget.value);
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.props.searchValue);
  }

  componentDidMount() {
    const storageValue = (localStorage.getItem('inputValue') as string) || '';
    this.props.onInputChange(storageValue);
  }

  render() {
    return (
      <>
        <div className="input-group mb-4">
          <input
            type="search"
            placeholder="What're you searching for?"
            aria-describedby="button-addon5"
            className="form-control"
            value={this.props.searchValue}
            onChange={this.onInputChange}
          />
          <SearchButton />
        </div>
      </>
    );
  }
}

export default Search;
