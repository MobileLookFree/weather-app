import { all } from 'redux-saga/effects';
import { addCityWatcher, deleteCityWatcher, tempParamWatcher } from './sagas';

export default function* localStorageWatcher() {
  yield all([
    addCityWatcher(),
    deleteCityWatcher(),
    tempParamWatcher(),
  ]);
}
