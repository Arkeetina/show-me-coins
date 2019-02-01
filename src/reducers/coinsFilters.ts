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
} from '../actions/types';

const INITIAL_COIN_FILTER_STATE = {
  sortBy: 'amountAscending',
  text: '',
};

interface FilterState { 
  sortBy: string,
  text: string,
}

export default (state: FilterState = INITIAL_COIN_FILTER_STATE, action) => {
  switch (action.type) {
    case SORT_BY_NAME_ASCENDING:
      return {
        ...state,
        sortBy: 'nameAscending',
      };
    case SORT_BY_NAME_DESCENDING:
      return {
        ...state,
        sortBy: 'nameDescending',
      };
    case SORT_BY_PRICE_USD_ASCENDING:
      return {
        ...state,
        sortBy: 'priceUsdAscending',
      };
    case SORT_BY_PRICE_USD_DESCENDING:
      return {
        ...state,
        sortBy: 'priceUsdDescending',
      };
    case SORT_BY_MARKET_CAP_ASCENDING:
      return {
        ...state,
        sortBy: 'marketCapAscending',
      };
    case SORT_BY_MARKET_CAP_DESCENDING:
      return {
        ...state,
        sortBy: 'marketCapDescending',
      };
    case SORT_BY_PER_CHANGE_ASCENDING:
      return {
        ...state,
        sortBy: 'perChangeAscending',
      };
    case SORT_BY_PER_CHANGE_DESCENDING:
      return {
        ...state,
        sortBy: 'perChangeDescending',
      };
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};
