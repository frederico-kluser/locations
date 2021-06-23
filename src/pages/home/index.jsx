/* eslint-disable global-require */
import React from 'react';

import Map from '../../components/map';
import Carrousel from '../../components/carrousel';
import Main from './styled';

const Home = () => (
  <Main>
    <Map />
    <Carrousel />
  </Main>
);

export default Home;
