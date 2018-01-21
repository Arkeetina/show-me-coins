import _ from 'lodash';
import { FETCH_COIN } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COIN:
      return {
        ...state,
        rates: action.rates.data,
      };
    default:
      return state;
  }
};
