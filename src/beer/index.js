import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

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

const TimeLeft = styled('div')`
  font-size: 1rem;
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

class Beer extends Component {
  fireWorks = () => {
    return (
      <div className={`pyro ${Pyro}`}>
        <div className="before" />
        <div className="after" />
      </div>
    );
  };

  isItTime = () => {
    const date = new Date();

    if (date.getDay() === 5 && date.getHours() >= 16) {
      return <div>Yes {this.fireWorks()}</div>;
    }
    return 'No';
  };

  getNextDayOfWeek = (date, dayOfWeek, hour) => {
    var resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
    resultDate.setHours(hour, 0, 0, 0);
    return resultDate;
  };

  countdown = countDownDate => {
    const x = setInterval(() => {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

      return `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds}`;
    }, 1000);
  };
  timeLeft = () => {
    if (this.isItTime() === 'No') {
      let countDownDate = this.getNextDayOfWeek(new Date(), 5, 16);
      // Update the count down every 1 second
      this.countdown(countDownDate);
    }
  };

  render() {
    return (
      <Container>
        <Question>Is it beer O'Clock?</Question>
        <Answer>{this.isItTime()}</Answer>
        <TimeLeft>{this.timeLeft()}</TimeLeft>
      </Container>
    );
  }
}

export default Beer;
