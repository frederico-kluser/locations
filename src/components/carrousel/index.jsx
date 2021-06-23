/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import {
  Item, Paragraph, Place, Scroller, Title,
} from './styled';
import { replaceActiveAction, replacePositionAction, replaceScaleAction } from '../../store/actions';
import store from '../../store';

const Carrousel = () => {
  const { data, position } = store.getState();

  let touchstartX = 0;
  let touchendX = 0;

  const [side, setSide] = useState('');

  const swipeCarrousel = (newPosition) => {
    replacePositionAction(newPosition);
    replaceScaleAction(3);
    replaceActiveAction(false);
    setTimeout(() => {
      replaceScaleAction(6);
      setTimeout(() => {
        replaceActiveAction(true);
      }, 750);
    }, 250);
  };

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

export default Carrousel;
