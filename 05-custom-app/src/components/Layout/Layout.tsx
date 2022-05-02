import React from 'react';
import { Outlet } from 'react-router-dom';
import Currentpage from '../Currentpage/Currentpage';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Currentpage />
      <Outlet />
    </div>
  );
};

export default Layout;
