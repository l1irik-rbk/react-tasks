import React from 'react';
import { useLocation } from 'react-router-dom';

const Currentpage = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split('/').filter((el) => el);
  const page = pathArray[0];
  const changedPage = !page ? 'Home' : page;
  const modPage = changedPage.charAt(0).toUpperCase() + changedPage.slice(1);

  return (
    <div>
      <h1 className="path-title">You are at {modPage} page</h1>
    </div>
  );
};

export default Currentpage;
