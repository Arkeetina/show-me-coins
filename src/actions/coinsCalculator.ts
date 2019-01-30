import { action, payload } from "ts-action";
import {
  SET_COIN_TYPE,
  SET_COIN_YEAR,
  SET_COIN_VALUE,
  SET_COIN_MONTH,
  SHOW_RESULT,
  HIDE_RESULT,
} from './types';

// export const selectCoinType = action(SET_COIN_TYPE, payload<{ coinType: string }>());
export const selectCoinType = action(SET_COIN_TYPE, payload<{ coinType: string }>());
export const selectCoinYear = action(SET_COIN_YEAR, payload<{ yearNumber: number }>());

// export const selectCoinYear = action(SET_COIN_YEAR, payload<{ yearNumber: number }>());
export const selectCoinMonth = action(SET_COIN_MONTH, payload<{ monthNumber: number }>());
export const setDollarValue = action(SET_COIN_VALUE, payload<{ inputedDollarValue: number }>());
export const showResult = action(SHOW_RESULT);
export const hideResult = action(HIDE_RESULT);
