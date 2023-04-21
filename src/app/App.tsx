import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayouts } from '../layouts';
import { AddPostModal, Header } from '../components';
import { HomePage } from '../pages';

import '../styles/style.scss';

const App:React.FC = () => (
  <div className="wrap">
    <AddPostModal />
    <Header />
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </div>
);

export { App };
