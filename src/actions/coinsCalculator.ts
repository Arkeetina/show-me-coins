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
export const selectCoinType = action(SET_COIN_TYPE, payload<{ coinType: any }>());
export const selectCoinYear = action(SET_COIN_YEAR, payload<{ yearNumberObj: any }>());

// export const selectCoinYear = action(SET_COIN_YEAR, payload<{ yearNumberObj: number }>());
export const selectCoinMonth = action(SET_COIN_MONTH, payload<{ monthNumberObj: any }>());
export const setInvestedAmount = action(SET_COIN_VALUE, payload<{ inputedValue: any }>());
export const showResult = action(SHOW_RESULT);
export const hideResult = action(HIDE_RESULT);
