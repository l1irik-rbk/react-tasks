import React from 'react';
import { HOUSES } from '../../../helpers/constants';
import { HomepageState } from '../../../helpers/TypeScript/types';
import CardsList from '../CardsList/CardsList';
import Search from '../Search/Search';

class Homepage extends React.Component<object, HomepageState> {
  state = {
    houses: HOUSES,
  };

  render() {
    return (
      <section className="home-page" data-testid="home-page">
        <h1 className="main-title">Home</h1>
        <Search />
        <CardsList houses={this.state.houses} />
      </section>
    );
  }
}

export default Homepage;
