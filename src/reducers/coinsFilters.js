import {
  SORT_BY_NAME_ASCENDING,
  SORT_BY_AMOUNT_ASCENDING,
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT_DESCENDING,
  SORT_BY_NAME_DESCENDING,
} from '../actions/types';

const INITIAL_COIN_FILTER_STATE = {
  sortBy: 'amountAscending',
  text: '',
};

export default (state = INITIAL_COIN_FILTER_STATE, action) => {
  switch (action.type) {
    case SORT_BY_NAME_ASCENDING:
      return {
        ...state,
        sortBy: 'nameAscending',
      };
    case SORT_BY_AMOUNT_ASCENDING:
      return {
        ...state,
        sortBy: 'amountAscending',
      };
    case SORT_BY_AMOUNT_DESCENDING:
      return {
        ...state,
        sortBy: 'amountDescending',
      };
    case SORT_BY_NAME_DESCENDING:
      return {
        ...state,
        sortBy: 'nameDescending',
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
