import React from 'react';
import { ModalWindowProp } from '../../../helpers/TypeScript/types';

const ModalWindow = ({ closeModalWindow, person }: ModalWindowProp) => {
  if (!person) return null;

  const {
    name,
    birth_year: birthYear,
    mass,
    height,
    gender,
    eye_color: eyeColor,
    hair_color: hairColor,
    skin_color: skinColor,
  } = person;
  return (
    <div className="overlay" onClick={closeModalWindow}>
      <div className="modal-window">
        <div
          className="card shadow p-3 mb-5 bg-white rounded"
          onClick={(e) => e.stopPropagation()}
          data-testid="cardWindow"
        >
          <div className="close-btn" onClick={closeModalWindow} data-testid="closeBtn">
            <img
              className="close-btn-img"
              src={`https://cdn-icons-png.flaticon.com/512/17/17047.png`}
            />
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
