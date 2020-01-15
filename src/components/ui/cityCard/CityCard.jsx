import React from 'react';
import DeleteIcon from '../icons/DeleteIcon';

const CityCard = ({ classes, name, icon, temp, wind, pressure, deleteCity }) => (
  <div className={classes.card}>
    <div className={classes.cardHeader}>
      <h3>{name}</h3>
      <button
        className={classes.deleteButton}
        onClick={() => deleteCity(name)}
      >
        <DeleteIcon />
      </button>
    </div>
    <div className={classes.weather}>
      <img className={classes.weatherIcon} alt="" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <span>{temp > 0 ? `+${temp}` : temp} ℃</span>
    </div>
    <span className={classes.additional}>Ветер: {wind} м/c</span>
    <span className={classes.additional}>Давление: {pressure} мм</span>
  </div>
);

export default CityCard;