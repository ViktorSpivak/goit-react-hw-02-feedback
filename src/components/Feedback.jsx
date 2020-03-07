import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import StatisticsData from "./StatisticData";
import Notification from "./Notification";

export class Feedback extends Component {
  static defaultProps = {
    step: 1
  };
  static propTypes = {
    step: PropTypes.number
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleChangeFeedback = ev => {
    const buttonName = ev.target.name;
    buttonName === "bad" &&
      this.setState(state => ({
        bad: state.bad + this.props.step
      }));
    buttonName === "neutral" &&
      this.setState(state => ({
        neutral: state.neutral + this.props.step
      }));
    buttonName === "good" &&
      this.setState(state => ({
        good: state.good + this.props.step
      }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleChangeFeedback} />
        </Section>
        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <StatisticsData
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
