import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import actionCreator from '../../../utils/actionCreator';
import selectorCreator from '../../../utils/selectorCreator';
import citiesTypes from '../../../store/actionTypes';

import ControlPanel from '../controlPanel';
import Dashboard from '../dashboard';

class Wrapper extends React.PureComponent {
  componentDidMount() {
    const { addCity, setTempLimit } = this.props;
    if (localStorage.getItem('cities')) {
      addCity(JSON.parse(localStorage.getItem('cities')));
    }
    if (localStorage.getItem('tempLimit')) {
      setTempLimit(localStorage.getItem('tempLimit'));
    }
  }

  transformCities = () => {
    const { cities } = this.props;
    return cities.toJS();
  };

  addCity = (city) => {
    const { cities, addCity } = this.props;
    const newCities = cities.toJS();
    if (newCities.length === 0) {
      newCities.push(city);
      addCity(newCities);
    } else if
    (newCities.find(item => item.name === city.name)) {
      alert('Такой город уже есть');
    } else {
      newCities.push(city);
      addCity(newCities);
    }
  };

  deleteCity = (name) => {
    const { cities, deleteCity } = this.props;
    deleteCity(cities.toJS().filter(item => item.name !== name));
  };

  render() {
    const { classes, tempLimit, setTempLimit, } = this.props;
    const cities = this.transformCities();
    return(
      <div className={classes.wrapper}>
        <ControlPanel
          cities={cities}
          addCity={this.addCity}
          tempLimit={tempLimit}
          setTempLimit={setTempLimit}
        />
        <Dashboard
          cities={cities}
          deleteCity={this.deleteCity}
          tempLimit={tempLimit}
        />
      </div>
    );
  }
}
export default connect(
  state => ({
    cities: selectorCreator(['cities', 'items'], List([]))(state),
    tempLimit: selectorCreator(['cities', 'tempLimit'], 0)(state),
  }),
  {
    addCity: actionCreator(citiesTypes.cities.add),
    deleteCity: actionCreator(citiesTypes.cities.delete),
    setTempLimit: actionCreator(citiesTypes.tempLimit.set),
  },
)(Wrapper);