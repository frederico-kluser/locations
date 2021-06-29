/* eslint-disable react-redux/useSelector-prefer-selectors */
import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';
import { Img, Pointer, PointerEffect } from './styled';
import worldMap from '../../assets/world.svg';

const Map = () => {
  const {
    active, data, position, scale,
  } = useSelector((state) => state);

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
