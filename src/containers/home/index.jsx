/* eslint-disable global-require */
import React, { useState } from 'react';

import Map from '../../components/map';
import Carrousel from '../../components/carrousel';
import Main from './styled';

const Home = () => {
  const data = [
    {
      country: 'Brazil',
      imageUrl: require('../../assets/countries/brazil.jpeg'),
      mapPosition: 'translate(16vw, -16.7vw)',
      trips: 5,
    },
    {
      country: 'South Africa',
      imageUrl: require('../../assets/countries/africa.jpeg'),
      mapPosition: 'translate(-3.6vw, -21.7vw)',
      trips: 10,
    },
    {
      country: 'England',
      imageUrl: require('../../assets/countries/england.jpeg'),
      mapPosition: 'translate(3.4vw, 4.2vw)',
      trips: 18,
    },
  ];

  const [position] = useState(0);

  return (
    <Main>
      <Map position={`scale(6) ${data[position].mapPosition}`} />
      <Carrousel data={data} position={position} />
    </Main>
  );
};

export default Home;
