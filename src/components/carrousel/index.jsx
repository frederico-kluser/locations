import React from 'react';
import PropTypes from 'prop-types';

import {
  Item, Paragraph, Place, Scroller, Title,
} from './styled';

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      touchendX: 0,
      touchstartX: 0,
    };
    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  moveCards(side) {
    console.log('side :', side);
    const { position } = this.state;
    console.log(position);
  }

  handleGesure() {
    const { position, touchendX, touchstartX } = this.state;
    let newPosition = position;
    const { data } = this.props;
    let active = false;
    let side;

    if (touchendX > touchstartX && position > 0) {
      newPosition--;
      active = true;
      side = 'left';
    }
    if (touchendX < touchstartX && position < data.length - 1) {
      newPosition++;
      active = true;
      side = 'right';
    }

    if (active) {
      this.setState({ position: newPosition });
      this.moveCards(side);
    } else {
      console.log('Nothing Happens ');
    }
  }

  touchStart(event) {
    this.setState({ touchstartX: event.changedTouches[0].screenX });
  }

  touchEnd(event) {
    this.setState({ touchendX: event.changedTouches[0].screenX });
    this.handleGesure();
  }

  mouseDown(event) {
    this.setState({ touchstartX: event.screenX });
  }

  mouseUp(event) {
    this.setState({ touchendX: event.screenX });
    this.handleGesure();
  }

  renderItems() {
    const { data, position } = this.props;
    const HTML = [];

    data.forEach(({ country, imageUrl = { default: '' }, trips }, index) => {
      HTML.push(
        <Item key={country} selected={position === index}>
          <Place src={imageUrl.default} selected={position === index} alt={`${country} country wallpaper`} />
          <Title>{country}</Title>
          <Paragraph>
            {trips}
            {' '}
            trips
          </Paragraph>
        </Item>,
      );
    });

    return HTML;
  }

  render() {
    const { data, position } = this.props;
    return (
      <Scroller
        width={data.length}
        position={position}
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
      >
        { this.renderItems() }
      </Scroller>
    );
  }
}

Carrousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  position: PropTypes.number.isRequired,
};

export default Carrousel;
