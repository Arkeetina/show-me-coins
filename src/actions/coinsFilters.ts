import { action } from "ts-action";

import {
  SORT_BY_PRICE_USD_ASCENDING,
  SORT_BY_PRICE_USD_DESCENDING,
  SORT_BY_MARKET_CAP_ASCENDING,
  SORT_BY_MARKET_CAP_DESCENDING,
  SORT_BY_PER_CHANGE_ASCENDING,
  SORT_BY_PER_CHANGE_DESCENDING,
} from './types';

// Price
export const sortByPriceUsdAscending = action(SORT_BY_PRICE_USD_ASCENDING);
export const sortByPriceUsdDescending = action(SORT_BY_PRICE_USD_DESCENDING);

// Market Cap
export const sortByMarketCapAscending = action(SORT_BY_MARKET_CAP_ASCENDING);
export const sortByMarketCapDescending = action(SORT_BY_MARKET_CAP_DESCENDING);

// Percent Change
export const sortByPerChangeAscending = action(SORT_BY_PER_CHANGE_ASCENDING);
export const sortByPerChangeDescending = action(SORT_BY_PER_CHANGE_DESCENDING);

