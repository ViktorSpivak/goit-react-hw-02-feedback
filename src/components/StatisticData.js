import React, { Fragment } from "react";
const StatisticsData = ({ good, neutral, bad, total, positivePercentage }) => (
  <Fragment>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total()}</p>
    <p>Positiv feedback:{positivePercentage()}%</p>
  </Fragment>
);
export default StatisticsData;
