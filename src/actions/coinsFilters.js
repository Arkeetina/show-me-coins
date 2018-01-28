import {
  SORT_BY_NAME_ASCENDING,
  SORT_BY_NAME_DESCENDING,
  SORT_BY_PRICE_USD_ASCENDING,
  SORT_BY_PRICE_USD_DESCENDING,
  SORT_BY_MARKET_CAP_ASCENDING,
  SORT_BY_MARKET_CAP_DESCENDING,
  SORT_BY_PER_CHANGE_ASCENDING,
  SORT_BY_PER_CHANGE_DESCENDING,
  SET_TEXT_FILTER,
} from './types';

// Name
export const sortByNameAscending = () => ({
  type: SORT_BY_NAME_ASCENDING,
});

export const sortByNameDescending = () => ({
  type: SORT_BY_NAME_DESCENDING,
});

// Price
export const sortByPriceUsdAscending = () => ({
  type: SORT_BY_PRICE_USD_ASCENDING,
});

export const sortByPriceUsdDescending = () => ({
  type: SORT_BY_PRICE_USD_DESCENDING,
});

// Market Cap
export const sortByMarketCapAscending = () => ({
  type: SORT_BY_MARKET_CAP_ASCENDING,
});

export const sortByMarketCapDescending = () => ({
  type: SORT_BY_MARKET_CAP_DESCENDING,
});

// Percent Change
export const sortByPerChangeAscending = () => ({
  type: SORT_BY_PER_CHANGE_ASCENDING,
});

export const sortByPerChangeDescending = () => ({
  type: SORT_BY_PER_CHANGE_DESCENDING,
});

// Text filter
export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});
