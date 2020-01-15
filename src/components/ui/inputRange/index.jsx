import { withStyles } from '@material-ui/styles';
import InputRange from './InputRange';

const styles = {
  temperatureSlider: {
    height: '56px',
    marginBottom: '20px',
    marginLeft: '40px',
  },
  inputRangeTitle: {
    margin: '0px 0px 10px',
  },
  inputRange: {
    display: 'block',
    height: '4px',
    width: '240px',
    borderRadius: '2px',
    WebkitAppearance: 'none',
    cursor: 'pointer',
    background: 'gray',
    '&:focus': {
      outline: 'none',
    },
    '&::-webkit-slider-thumb': {
      height: '16px',
      width: '4px',
      WebkitAppearance: 'none',
      border: '1px solid black',
      borderRadius: '2px',
      background: 'black',
    },
    '&::-moz-range-thumb': {
      height: '16px',
      width: '4px',
      border: '1px solid black',
      background: 'black',
    },
    '&::-moz-range-progress': {
      border: '1px solid #ccc',
      borderRadius: '2px',
      background: '#ccc',
    }
  },
  '@media (max-width: 797px)': {
    temperatureSlider: {
      marginLeft: '20px',
    }
  },
  '@media (max-width: 786px)': {
    temperatureSlider: {
      marginLeft: '0px',
    }
  },
};

export default withStyles(styles)(InputRange);