import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

class Layout extends React.Component<object, object> {
  render() {
    return (
      <div className="container">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default Layout;
