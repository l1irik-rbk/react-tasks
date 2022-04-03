import React from 'react';
import { IHouse } from '../../../helpers/TypeScript/interfaces';
import Card from '../Card/Card';

class CardsList extends React.Component<{ houses: IHouse[] }, object> {
  render() {
    const houses = this.props.houses;

    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {houses.map((house) => {
          return <Card key={house.id} house={house} />;
        })}
      </div>
    );
  }
}

export default CardsList;
