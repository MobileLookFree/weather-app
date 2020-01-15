import React from 'react';
import tokens from '../../../utils/tokens';
import makeRequest from '../../../utils/api';

import { ReactDadata } from 'react-dadata';
import AddIcon from '../icons/AddIcon';
import InputRange from '../inputRange';

class ControlPanel extends React.PureComponent {
  state = {
    city: {
      name: '',
      coordinates: []
    }
  };

  getGeoPosition = async (city) => {
    const geoUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${tokens.yandexGeo}&format=json&geocode=${city}&results=1`;
    const geoData = await makeRequest(geoUrl);
    const coordinates = geoData.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');

    this.setState(prevState => ({
      ...prevState,
      city: {
        name: city,
        coordinates
      }
    }));
  };

  render() {
  const { classes, addCity, tempLimit, setTempLimit } = this.props;
  const { city } = this.state;
  return(
  <React.Fragment>
    <h1>Маябрь - погода в городе</h1>
    <div className={classes.controlPanel}>
      <div className={classes.addingCityMenu}>
        <ReactDadata
          className={classes.dadataInput}
          token={tokens.dadata}
          onChange={(place) => this.getGeoPosition(place.data.city)}
          placeholder="Город"
          autoload
        />
        <button
          className={classes.addButton}
          onClick={() => addCity(city)}
        >
          <AddIcon/>
        </button>
      </div>
      <InputRange
        tempLimit={tempLimit}
        setTempLimit={setTempLimit}
      />
    </div>
  </React.Fragment>
);
}
}

export default ControlPanel;