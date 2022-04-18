import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1 className="not-found-title">
          You need to type name of hero from star wars films. Luke, R2 and etc... Or press Enter to
          show home page!
        </h1>
      </div>
    );
  }
}

export default NotFound;
