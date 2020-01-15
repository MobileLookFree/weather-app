import { getIn } from 'immutable';
import { createSelector } from 'reselect';

const selectorCreator = (domain, defaultValue, callback) => createSelector(
  store =>  getIn(store, domain, defaultValue),
  value => (callback ? callback(value) : value),
);
export default selectorCreator;
