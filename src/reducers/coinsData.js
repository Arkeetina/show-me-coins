import { SET_COIN_RATES } from '../actions/types.ts';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COIN_RATES:
      return [...action.payload];
    default:
      return state;
  }
};
