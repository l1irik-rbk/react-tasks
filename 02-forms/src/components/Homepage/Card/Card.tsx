import React from 'react';
import { IHouse } from '../../../helpers/TypeScript/interfaces';

class Card extends React.Component<{ house: IHouse }> {
  render() {
    const { houseName, description, price, date, src } = this.props.house;

    return (
      <div className="col" data-testid="house">
        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
          <img src={src} className="card-img-top house-image" alt="house" />
          <div className="card-body">
            <h5 className="card-title">{houseName}</h5>
            <h6>
              <small>
                <span style={{ color: 'red' }}>{price}$</span> a night
              </small>
            </h6>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Free dates: {date}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
