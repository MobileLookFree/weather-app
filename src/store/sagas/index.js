import { put, takeLatest } from 'redux-saga/effects';
import citiesTypes from '../actionTypes';

function* localStorageCityWorker({ payload }) {
  try {
    yield put;
    localStorage.setItem('cities', JSON.stringify(payload));
  } catch (error) {
    console.log(error);
  }
}

function* localStorageTempWorker({ payload }) {
  try {
    yield put;
    localStorage.setItem('tempLimit', payload);
  } catch (error) {
    console.log(error);
  }
}

export function* addCityWatcher() {
  yield takeLatest(citiesTypes.cities.add, localStorageCityWorker);
}

export function* deleteCityWatcher() {
  yield takeLatest(citiesTypes.cities.delete, localStorageCityWorker);
}

export function* tempParamWatcher() {
  yield takeLatest(citiesTypes.tempLimit.set, localStorageTempWorker);
}