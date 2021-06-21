import React from 'react';
import Map from '../../components/map';
import Main from './styled';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main>
        <Map position="scale(6) translate(16vw, -16vw)" />
      </Main>
    );
  }
}

export default Home;
