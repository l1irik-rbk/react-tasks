import React from 'react';
import { NewCardProp } from '../../../helpers/TypeScript/types';

class NewCard extends React.Component<NewCardProp, object> {
  render() {
    const { firstName, lastName, birthday, country, picture } = this.props.card;

    return (
      <div className="col">
        <div className="card h-100">
          <img src={picture} className="card-img-top card-img" alt="..." />
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
  }
}

export default NewCard;
