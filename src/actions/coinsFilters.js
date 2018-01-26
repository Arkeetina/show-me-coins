import {
  SORT_BY_NAME_ASCENDING,
  SORT_BY_AMOUNT_ASCENDING,
  SORT_BY_NAME_DESCENDING,
  SORT_BY_AMOUNT_DESCENDING,
  SET_TEXT_FILTER,
} from './types';

export const sortByNameAscending = () => ({
  type: SORT_BY_NAME_ASCENDING,
});

export const sortByNameDescending = () => ({
  type: SORT_BY_NAME_DESCENDING,
});

export const sortByAmountAscending = () => ({
  type: SORT_BY_AMOUNT_ASCENDING,
});

export const sortByAmountDescending = () => ({
  type: SORT_BY_AMOUNT_DESCENDING,
});

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});
