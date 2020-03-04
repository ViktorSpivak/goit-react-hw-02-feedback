import React, { Fragment } from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const [updateFeedbackGood, updateFeedbackNeutral, updateFeedbackBad] = [
    ...onLeaveFeedback
  ];
  return (
    <Fragment>
      <button type="button" onClick={updateFeedbackGood}>
        Good
      </button>
      <button type="button" onClick={updateFeedbackNeutral}>
        Neutral
      </button>
      <button type="button" onClick={updateFeedbackBad}>
        Bad
      </button>
    </Fragment>
  );
};
export default FeedbackOptions;
