import { action } from "ts-action";
import { SET_APP_MODE_TO_CALCULATOR, SET_APP_MODE_TO_PRICES } from './types';

export const setAppModeToCalculator = action(SET_APP_MODE_TO_CALCULATOR);
export const setAppModeToPrices = action(SET_APP_MODE_TO_PRICES);
