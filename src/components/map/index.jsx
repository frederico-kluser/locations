import React from 'react';

import './style.css';
import { Img, Pointer, PointerEffect } from './styled';
import worldMap from '../../assets/world.svg';
import store from '../../store';

const Map = () => {
  const {
    active, data, position, scale,
  } = store.getState();
  return (
    <>
      <Img src={worldMap} styleTransform={`scale(${scale}) ${data[position].mapPosition}`} alt="world map" />
      <Pointer active={active}>
        <PointerEffect active={active} />
        <PointerEffect active={active} last />
      </Pointer>
    </>
  );
};

export default Map;
