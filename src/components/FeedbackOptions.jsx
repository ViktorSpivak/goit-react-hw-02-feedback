import React, { Fragment } from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Fragment>
      <button type="button" onClick={onLeaveFeedback} name="good">
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback} name="neutral">
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback} name="bad">
        Bad
      </button>
    </Fragment>
  );
};
export default FeedbackOptions;
