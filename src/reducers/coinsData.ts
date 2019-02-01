import { SET_COIN_RATES } from '../actions/types';

const INITIAL_STATE = [];

export default (state: any[] = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COIN_RATES:
      return [...action.payload];
    default:
      return state;
  }
};
