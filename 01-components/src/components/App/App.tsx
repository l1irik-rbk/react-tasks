import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Errorpage from '../404/404';

import Aboutpage from '../Aboutpage/Aboutpage';
import Homepage from '../Homepage/Page/Homepage';
import Layout from '../Layout/Layout';

class App extends React.Component<object, object> {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="AboutUs" element={<Aboutpage />} />
          <Route path="/404" element={<Errorpage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
