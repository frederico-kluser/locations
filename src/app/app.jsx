/* eslint-disable global-require */
import React from 'react';

import Map from '../components/map';
import Carrousel from '../components/carrousel';
import Main from './styled';

const App = () => (
  <Main>
    <Map />
    <Carrousel />
  </Main>
);

export default App;
