import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import Countdown from './Countdown';

const Container = styled('div')`
  text-align: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Answer = styled('div')`
  font-size: 5rem;
  display: block;
`;
const Question = styled('div')`
  font-size: 1.5rem;
  display: block;
`;

const Pyro = css`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
`;

const Image = styled('img')`
  width: 100vw;
  position: absolute;
  bottom: -25%;
  left: 0;
  opacity: 0;
  transform: translateY(50px);
  transition: 1s;

  @media (min-width: 768px) {
    width: 50vw;
  }

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

class Beer extends Component {
  state = {
    beerTime: false,
    timeLeft: false
  };

  beerTime = {
    day: 5,
    hour: 16,
    mins: 0
  };

  timeout = null;

  componentDidMount() {
    this.isItTime();
    this.timeout = setInterval(this.isItTime, 1 * 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  isItTime = () => {
    const date = new Date();

    this.setState({
      beerTime:
        date.getDay() === this.beerTime.day &&
        date.getHours() >= this.beerTime.hour &&
        date.getMinutes() >= this.beerTime.mins
    });
  };

  fireWorks = () => {
    return (
      <div className={`pyro ${Pyro}`}>
        <div className="before" />
        <div className="after" />
      </div>
    );
  };

  render() {
    return (
      <Container>
        <Question>Is it beer O'Clock?</Question>
        <Answer>
          {this.state.beerTime ? <div>Yes {this.fireWorks()}</div> : 'No'}
        </Answer>
        <Countdown />

        <Image
          src="/images/beer.png"
          className={this.state.beerTime ? 'show' : ''}
        />
      </Container>
    );
  }
}

export default Beer;
