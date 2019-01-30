import {
  SET_APP_MODE_TO_CALCULATOR,
  SET_APP_MODE_TO_PRICES,
} from '../actions/types.ts';

const INITIAL_COIN_UI_STATE = {
  appMode: 'calculator',
};

export default (state = INITIAL_COIN_UI_STATE, action) => {
  switch (action.type) {
    case SET_APP_MODE_TO_CALCULATOR:
      return {
        ...state,
        appMode: 'calculator',
      };
    case SET_APP_MODE_TO_PRICES:
      return {
        ...state,
        appMode: 'prices',
      };
    default:
      return state;
  }
};
