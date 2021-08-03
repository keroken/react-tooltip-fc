import React from 'react';
import ReactDOM from 'react-dom';

export const MyPortal = (children) => {
  const el = document.createElement('div');

  React.useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el)
};