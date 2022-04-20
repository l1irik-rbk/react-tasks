import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
