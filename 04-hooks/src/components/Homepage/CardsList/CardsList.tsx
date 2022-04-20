import React from 'react';
import { CardListProp } from '../../../helpers/TypeScript/types';
import Card from '../Card/Card';

const CardsList = ({ people, showModalWindow }: CardListProp) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {people?.map((person) => {
        return <Card key={person.name} person={person} showModalWindow={showModalWindow} />;
      })}
    </div>
  );
};

export default CardsList;
