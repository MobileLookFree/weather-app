import React from 'react';
import RangeLabel from '../rangeLabel';

class InputRange extends React.PureComponent {
  handleChange = (event) => {
    const { setTempLimit } = this.props;
    setTempLimit(+event.target.value);
  };

  render() {
    const { classes, tempLimit } = this.props;
    return (
      <div className={classes.temperatureSlider}>
        <h5 className={classes.inputRangeTitle}>Где сейчас теплее, чем</h5>
        <input
          className={classes.inputRange}
          type="range"
          min="-15"
          max="25"
          step="1"
          value={tempLimit}
          onChange={this.handleChange}
        />
        <RangeLabel
          value={tempLimit}
          position={tempLimit}
        />
      </div>
    )
  }
}

export default InputRange;




