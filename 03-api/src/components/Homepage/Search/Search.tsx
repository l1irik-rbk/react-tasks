import React from 'react';
import SearchButton from '../SearchButton/SearchButton';

class Search extends React.Component<object, { inputValue: string }> {
  state = {
    inputValue: '',
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  componentDidMount() {
    const storageValue = (localStorage.getItem('inputValue') as string) || '';
    this.setState({
      inputValue: storageValue,
    });
  }

  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="input-group mb-4">
        <input
          type="search"
          placeholder="What're you searching for?"
          aria-describedby="button-addon5"
          className="form-control"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <SearchButton />
      </div>
    );
  }
}

export default Search;
