import React from 'react';
import CityCard from '../cityCard';
import tokens from '../../../utils/tokens';
import makeRequest from '../../../utils/api';
import PaToHg from '../../../utils/PaToHg';

class Dashboard extends React.PureComponent {
  state = {
    citiesWithWeatherData: []
  };

  componentDidUpdate(prevProps) {
    const { cities } = this.props;
    if (cities && prevProps.cities !== cities){
      this.getCities(cities);
    }
  }

  getWeather(cities) {
    return Promise.all(
      cities.map(async (item) => {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${item.coordinates[1]}&lon=${item.coordinates[0]}&units=metric&appid=${tokens.openWeatherMap}&lang=ru`;
        const weatherData = await makeRequest(weatherUrl);
        return ({
          name: item.name,
          id: weatherData.id,
          icon: weatherData.weather[0].icon,
          temp: Math.round(+weatherData.main.temp),
          wind: weatherData.wind.speed,
          pressure: PaToHg(weatherData.main.pressure)
        });
      })
    )
  }

  getCities = (cities) => {
    this.getWeather(cities).then(data => {
      this.setState(prevState => ({
        ...prevState,
        citiesWithWeatherData: data
      }));
    });
  };

  render() {
    const { classes, deleteCity, tempLimit } = this.props;
    const { citiesWithWeatherData } = this.state;
    const citiesWithLimit = citiesWithWeatherData.filter(item => item.temp > tempLimit);
    return (
      <div className={classes.dashboard}>
        {citiesWithLimit.map(item => (
          <CityCard
            key={item.id}
            name={item.name}
            icon={item.icon}
            temp={item.temp}
            wind={item.wind}
            pressure={item.pressure}
            deleteCity={deleteCity}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;