import React from 'react';
import { HOUSES } from '../helpers/constants';
import { HomepageState } from '../helpers/TypeScript/types';
import Card from './Card';
import Search from './Search';

class Homepage extends React.Component<object, HomepageState> {
  state = {
    houses: HOUSES,
  };

  render() {
    const { houses } = this.state;

    return (
      <section className="home-page">
        <h1 className="main-title">Home</h1>
        <Search />

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {houses.map((house) => {
            return <Card key={house.id} house={house} />;
          })}
        </div>
      </section>
    );
  }
}

export default Homepage;
