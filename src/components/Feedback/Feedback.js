import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target }) => {
    this.setState(prev => ({ [target.name]: prev[target.name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 / (good + neutral + bad)) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
