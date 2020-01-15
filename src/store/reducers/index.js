import { List } from 'immutable';
import initialState from '../initialState';
import actionTypes from '../actionTypes';

const citiesReducer = (state = initialState.cities, { type, payload }) => {
  switch (type) {
    case actionTypes.cities.add:
      return state.set('items', List(payload));
    case actionTypes.cities.delete:
      return state.set('items', List(payload));
    case actionTypes.tempLimit.set:
      return state.set('tempLimit', payload);
    default:
      return state;
  }
};

export default citiesReducer;
