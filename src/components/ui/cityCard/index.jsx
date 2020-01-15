import { withStyles } from '@material-ui/styles';
import CityCard from './CityCard';

const styles = {
  card: {
    padding: '10px',
    margin: '0px 20px 20px 0px',
    border: '1px solid #ccc',
    minWidth: '200px',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& h3': {
      margin: '0px 0px 16px',
    }
  },
  deleteButton: {
    outline: 'none',
    display: 'block',
    paddingTop: '3px',
    width: '24px',
    height: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '& svg': {
      '& #deleteIcon': {
        transition: '200ms',
      },
      '&:hover': {
        '& #deleteIcon': {
          fill: 'gray',
        }
      }
    }
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& span': {
      fontSize: '20px',
      fontWeight: '600',
    }
  },
  weatherIcon: {
    height: '64px',
    width: '64px',
  },
  additional: {
    display: 'block',
    padding: '2px 0px',
  }
};

export default withStyles(styles)(CityCard);