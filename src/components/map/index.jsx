import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Img, Pointer, PointerEffect } from './styled';
import worldMap from '../../assets/world.svg';

const Map = ({ position }) => (
  <>
    <Img src={worldMap} position={position} alt="world map" />
    <Pointer active>
      <PointerEffect active />
      <PointerEffect active last />
    </Pointer>
  </>
);

Map.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Map;
