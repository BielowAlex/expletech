import React from 'react';

import './Loading.scss';

const Loading:React.FC = () => (
  <div className="loader">
    <div className="loader-fig" />
    <div className="loader-fig" />
    <div className="loader-fig" />
  </div>
);

export { Loading };
