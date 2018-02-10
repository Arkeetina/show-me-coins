import { SHOW_TOOLTIP, HIDE_TOOLTIP } from './types';

export const showTooltip = (symbol, textOffSetTop) => ({
  type: SHOW_TOOLTIP,
  symbol,
  textOffSetTop,
});

export const hideTooltip = () => ({
  type: HIDE_TOOLTIP,
});
