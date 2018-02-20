import {
  SET_COIN_TYPE,
  SET_COIN_YEAR,
  SET_COIN_VALUE,
  SET_COIN_MONTH,
} from './types';

export const selectCoinType = coinType => ({
  type: SET_COIN_TYPE,
  payload: coinType,
});

export const selectCoinYear = yearName => ({
  type: SET_COIN_YEAR,
  payload: yearName,
});

export const selectCoinMonth = monthNumber => ({
  type: SET_COIN_MONTH,
  payload: monthNumber,
});

export const inputValue = inputedDollarValue => ({
  type: SET_COIN_VALUE,
  payload: inputedDollarValue,
});
