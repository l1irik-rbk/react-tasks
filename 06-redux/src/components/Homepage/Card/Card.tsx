import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CardProp } from '../../../helpers/TypeScript/types';
import { AppDispatch } from '../../../toolkitRedux/store';
import { appSlice } from '../../../toolkitRedux/toolkitSlice';

const Card = ({ person }: CardProp) => {
  const { name, birth_year: birthYear, mass, height, gender } = person;
  const { setClickedPersonName } = appSlice.actions;
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(setClickedPersonName(name));
  };

  return (
    <NavLink className="person-link" to={`/people/${name}`} onClick={handleClick}>
      <div className="col" data-testid="house">
        <div className="card shadow p-3 mb-5 bg-white rounded card-element">
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
    </NavLink>
  );
};

export default Card;
