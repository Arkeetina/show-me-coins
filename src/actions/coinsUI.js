import { SHOW_HOVER_BOX, HIDE_HOVER_BOX } from './types';

export const showHoverBox = (symbol, textOffSetTop) => ({
  type: SHOW_HOVER_BOX,
  symbol,
  textOffSetTop,
});

export const hideHoverBox = () => ({
  type: HIDE_HOVER_BOX,
});
