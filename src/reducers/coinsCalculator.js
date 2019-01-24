import {
  SET_COIN_TYPE,
  HIDE_RESULT,
  SET_COIN_YEAR,
  SET_COIN_MONTH,
  SET_COIN_VALUE,
  SHOW_RESULT,
} from '../actions/types';
import coinsHistoricalData from '../dummy_data/coinsHistoricalData';

const INITIAL_COIN_CALCULATOR_STATE = {
  coinsHistoricalData,
  selectedCoinData: coinsHistoricalData[0],
  selectedYearData: coinsHistoricalData[0].historicData[0],
  selectedMonthData: coinsHistoricalData[0].historicData[0].monthPrices[0],
  inputedValue: 0,
  displayResult: false,
};

export default (state = INITIAL_COIN_CALCULATOR_STATE, action) => {
  switch (action.type) {
    case SET_COIN_TYPE:
      return {
        ...state,
        selectedCoinData: action.payload,
        selectedYearData: action.payload.historicData[0],
        selectedMonthData: action.payload.historicData[0].monthPrices[0],
        displayResult: false,
      };
    case SET_COIN_YEAR:
      return {
        ...state,
        selectedYearData: action.payload,
        selectedMonthData: action.payload.monthPrices[0],
        displayResult: false,
      };
    case SET_COIN_MONTH:
      return {
        ...state,
        selectedMonthData: action.payload,
        displayResult: false,
      };
    case SET_COIN_VALUE:
      return {
        ...state,
        inputedValue: action.payload,
        displayResult: false,
      };
    case HIDE_RESULT:
      return {
        ...state,
        displayResult: false,
      };
    case SHOW_RESULT:
      return {
        ...state,
        displayResult: true,
      };
    default:
      return state;
  }
};
