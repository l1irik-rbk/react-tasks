import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { AppContext, appReducer, initialState } from './context/AppContext';
import './styles/style.css';

const Main = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppContext.Provider value={{ state, dispatch }}>
          <App />
        </AppContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
