import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../toolkitRedux/reduxHooks';

const Personpage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');

  const { people, clickedPersonName } = useAppSelector((state) => state.appReducer);
  const person = people.filter((person) => person.name === clickedPersonName);

  if (!person.length) {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Error nothing was found!</h1>
        <button className="back-link" onClick={goHome}>
          Go back
        </button>
      </>
    );
  }

  const {
    name,
    birth_year: birthYear,
    mass,
    height,
    gender,
    eye_color: eyeColor,
    hair_color: hairColor,
    skin_color: skinColor,
  } = person[0];

  return (
    <div className="card shadow p-3 mb-5 bg-white rounded card-page">
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
          <li>
            <span className="prefics">Eye color:</span> {eyeColor}
          </li>
          <li>
            <span className="prefics">Hair color:</span> {hairColor}
          </li>
          <li>
            <span className="prefics">Skin color:</span> {skinColor}
          </li>
        </ul>
        <button className="back-link" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Personpage;
