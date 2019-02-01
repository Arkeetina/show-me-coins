import {
  SET_APP_MODE_TO_CALCULATOR,
  SET_APP_MODE_TO_PRICES,
} from '../actions/types';

const INITIAL_COIN_UI_STATE = {
  appMode: 'calculator',
};

interface UIState {
  appMode: string,
}

export default (state: UIState = INITIAL_COIN_UI_STATE, action) => {
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
