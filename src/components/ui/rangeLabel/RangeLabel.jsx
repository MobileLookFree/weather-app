import React from 'react';

const RangeLabel = ({ classes, value }) => (
  <span
    className={classes.temperatureLabel}
  >
    {value > 0 ? `+${value}`: value} ℃
  </span>
);

export default RangeLabel;