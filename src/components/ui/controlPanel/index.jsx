import { withStyles } from '@material-ui/styles';
import ControlPanel from './ControlPanel';

const styles = {
  dadataInput: {
    height: '56px',
    width: '260px',
    borderRadius: '0px',
    outline: 'none',
    transition: '200ms',
    '&:hover': {
      border: '1px solid gray',
    },
    '&:focus': {
      border: '1px solid gray',
      boxShadow: 'none',
    }
  },
  controlPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '36px 0px',
  },
  addingCityMenu: {
    display: 'flex',
    flexDirection: 'row',
    '& > div.react-dadata__suggestions': {
      backgroundColor: 'red',
    },
    marginBottom: '20px',
  },
  addButton: {
    outline: 'none',
    display: 'block',
    paddingTop: '3px',
    margin: '0px 0px 0px 10px',
    width: '84px',
    height: '56px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    transition: '200ms',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e0e0e0',
      border: '1px solid grey',
    }
  },
  '@media (max-width: 692px)': {
    controlPanel: {
      justifyContent: 'center'
    }
  }
};

export default withStyles(styles)(ControlPanel);