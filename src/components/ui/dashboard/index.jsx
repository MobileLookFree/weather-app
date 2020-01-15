import { withStyles } from '@material-ui/styles';
import Dashboard from './Dashboard';

const styles = {
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  '@media (max-width: 692px)': {
    dashboard: {
      display: 'flex',
      justifyContent: 'center',
      '&>div': {
        marginRight: '0px',
      }
    }
  }
};

export default withStyles(styles)(Dashboard);

