import React from 'react';
import PropTypes from 'prop-types';

import Img from './styled';
import worldMap from '../../assets/world.svg';

const Map = ({ position }) => <Img src={worldMap} position={position} />;

Map.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Map;
