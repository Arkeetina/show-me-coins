import _ from 'lodash';
import { FETCH_COIN } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COIN:
      return {
        ...state,
        rates: _.mapKeys(action.rates.data, 'id'),
      };
    default:
      return state;
  }
};
