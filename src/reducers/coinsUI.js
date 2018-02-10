import {
  SHOW_HOVER_BOX,
  HIDE_HOVER_BOX,
} from '../actions/types';

const INITIAL_COIN_UI_STATE = {
  hoverBoxisHidden: true,
  text: '',
};

export default (state = INITIAL_COIN_UI_STATE, action) => {
  switch (action.type) {
    case SHOW_HOVER_BOX:
      return {
        ...state,
        hoverBoxisHidden: false,
        text: action.symbol,
        offSetTop: action.textOffSetTop,
      };
    case HIDE_HOVER_BOX:
      return {
        ...state,
        hoverBoxisHidden: true,
        text: '',
      };
    default:
      return state;
  }
};
