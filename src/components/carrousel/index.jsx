import React from 'react';
import PropTypes from 'prop-types';

import {
  Item, Paragraph, Place, Scroller, Title,
} from './styled';

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <Scroller width={data.length} position={position}>
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
