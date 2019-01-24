import { SET_APP_MODE_TO_CALCULATOR, SET_APP_MODE_TO_PRICES } from './types';


export const setAppModeToCalculator = () => ({
  type: SET_APP_MODE_TO_CALCULATOR,
});

export const setAppModeToPrices = () => ({
  type: SET_APP_MODE_TO_PRICES,
});
