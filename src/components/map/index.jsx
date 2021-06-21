import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Img, Pointer, PointerEffect } from './styled';
import worldMap from '../../assets/world.svg';

const Map = ({ styleTransform, active }) => (
  <>
    <Img src={worldMap} styleTransform={styleTransform} alt="world map" />
    <Pointer active={active}>
      <PointerEffect active={active} />
      <PointerEffect active={active} last />
    </Pointer>
  </>
);

Map.propTypes = {
  styleTransform: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Map;
