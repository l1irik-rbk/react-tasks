import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Errorpage from './404';

import Aboutpage from './Aboutpage';
import Homepage from './Homepage';
import Layout from './Layout';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="AboutUs" element={<Aboutpage />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
