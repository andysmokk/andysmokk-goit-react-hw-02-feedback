import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = () => {};

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        {/* <Section title="Statistics">
          <Statistics />
        </Section> */}
      </div>
    );
  }
}

export default Feedback;
