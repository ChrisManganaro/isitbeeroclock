import React, { Component } from 'react';
import styled from 'react-emotion';

const TimeLeft = styled('div')`
  font-size: 1rem;
  display: block;
`;

class Countdown extends Component {
  render() {
    return <TimeLeft />;
  }
}

export default Countdown;
