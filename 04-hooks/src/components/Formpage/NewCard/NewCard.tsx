import React from 'react';
import { newCard } from '../../../helpers/TypeScript/interfaces';

const NewCard = ({ firstName, lastName, birthday, country, newPicture }: newCard) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={newPicture}
          className="card-img-top card-img"
          alt="..."
          data-testid="new-person"
        />
        <div className="card-body">
          <h5 className="card-title card-title-names">
            {firstName} {lastName}
          </h5>
          <p className="card-text">
            <span>Birth date: </span>
            {birthday}
          </p>
          <p className="card-text">
            <span>Country: </span>
            {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
