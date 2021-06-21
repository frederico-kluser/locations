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

  const [position, setPosition] = useState(0);
  const [scale, setScale] = useState(6);
  const [active, setActive] = useState(true);

  const swipeCarrousel = (newPosition) => {
    setPosition(newPosition);
    setScale(3);
    setActive(false);
    setTimeout(() => {
      setScale(6);
      setTimeout(() => {
        setActive(true);
      }, 750);
    }, 250);
  };

  return (
    <Main>
      <Map active={active} styleTransform={`scale(${scale}) ${data[position].mapPosition}`} />
      <Carrousel data={data} position={position} swipeCarrousel={swipeCarrousel} />
    </Main>
  );
};

export default Home;
