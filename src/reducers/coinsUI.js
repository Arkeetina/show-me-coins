import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
} from '../actions/types';

const INITIAL_COIN_UI_STATE = {
  tooltipisHidden: true,
  text: '',
};

export default (state = INITIAL_COIN_UI_STATE, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return {
        ...state,
        tooltipisHidden: false,
        text: action.symbol,
        offSetTop: action.textOffSetTop,
      };
    case HIDE_TOOLTIP:
      return {
        ...state,
        tooltipisHidden: true,
        text: '',
      };
    default:
      return state;
  }
};
