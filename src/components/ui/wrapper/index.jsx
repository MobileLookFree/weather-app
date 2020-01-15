import { withStyles } from '@material-ui/styles';
import Wrapper from './Wrapper';

const styles = {
  wrapper: {
    width: '80%',
    maxWidth: '1024px',
    minWidth: '',
    margin: '0 auto',
  },
  '@media (max-width: 768px)': {
    wrapper: {
      width: '70%',
      margin: '0 auto',
    }
  },
  '@media (max-width: 692px)': {
    wrapper: {
      '& h1': {
        textAlign: 'center',
      }
    }
  },
};

export default withStyles(styles)(Wrapper);

