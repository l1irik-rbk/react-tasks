import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FC = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};

export default Modal;
