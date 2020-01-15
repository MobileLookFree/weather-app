import { withStyles } from '@material-ui/styles';
import RangeLabel from './RangeLabel';

const styles = {
  temperatureLabel: {
    position: 'absolute',
    marginTop: '10px',
    paddingLeft: ({ position }) => `${90 + position * 6 - 20}px`
  },
};

export default withStyles(styles)(RangeLabel);