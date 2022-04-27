import React from 'react';
import { CardProp } from '../../../helpers/TypeScript/types';

const Card = ({ person, showModalWindow }: CardProp) => {
  const { name, birth_year: birthYear, mass, height, gender } = person;

  return (
    <div className="col" data-testid="house">
      <div
        className="card shadow p-3 mb-5 bg-white rounded card-element"
        onClick={() => {
          showModalWindow(person);
        }}
        data-testid="personCard"
      >
        <div className="card-body">
          <h5 className="card-title person-name">{name}</h5>
          <ul>
            <li>
              <span className="prefics">Birth year:</span> {birthYear}
            </li>
            <li>
              <span className="prefics">Height:</span> {height}sm
            </li>
            <li>
              <span className="prefics">Mass:</span> {mass}kg
            </li>

            <li>
              <span className="prefics">Gender:</span> {gender}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
