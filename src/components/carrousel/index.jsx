/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Item, Paragraph, Place, Scroller, Title,
} from './styled';

const Carrousel = ({ data, position, swipeCarrousel }) => {
  let touchstartX = 0;
  let touchendX = 0;

  const [side, setSide] = useState('');

  const handleGesure = () => {
    let active = false;

    if (touchendX > touchstartX && position > 0) {
      swipeCarrousel(position - 1);
      active = true;
      setSide('left');
    }
    if (touchendX < touchstartX && position < data.length - 1) {
      swipeCarrousel(position + 1);
      active = true;
      setSide('right');
    }

    if (active) {
      setTimeout(() => {
        setSide('');
      }, 250);
    }
  };

  const touchStart = (event) => {
    touchstartX = event.changedTouches[0].screenX;
  };

  const touchEnd = (event) => {
    touchendX = event.changedTouches[0].screenX;
    handleGesure();
  };

  const mouseDown = (event) => {
    touchstartX = event.screenX;
  };

  const mouseUp = (event) => {
    touchendX = event.screenX;
    handleGesure();
  };

  const renderItems = () => {
    const HTML = [];

    data.forEach(({ country, imageUrl = { default: '' }, trips }, index) => {
      HTML.push(
        <Item key={country} selected={position === index}>
          <Place src={imageUrl.default} selected={position === index} alt={`${country} country wallpaper`} />
          <Title side={side}>{country}</Title>
          <Paragraph side={side}>
            {trips}
            {' '}
            trips
          </Paragraph>
        </Item>,
      );
    });

    return HTML;
  };

  return (
    <Scroller
      width={data.length}
      position={position}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
    >
      { renderItems() }
    </Scroller>
  );
};

Carrousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  position: PropTypes.number.isRequired,
  swipeCarrousel: PropTypes.func.isRequired,
};

export default Carrousel;
