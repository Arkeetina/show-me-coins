import { SET_COIN_TYPE, SET_COIN_YEAR, SET_COIN_MONTH, SET_COIN_VALUE } from '../actions/types';
import coinsHistoricalData from '../dummy_data/coinsHistoricalData';

const INITIAL_COIN_CALCULATOR_STATE = {
  coinsHistoricalData,
  selectedCoinData: coinsHistoricalData[0],
  selectedYearData: coinsHistoricalData[0].historicData[0],
  selectedMonthData: coinsHistoricalData[0].historicData[0].monthPrices[0],
  inputedValue: 0,
};

export default (state = INITIAL_COIN_CALCULATOR_STATE, action) => {
  switch (action.type) {
    case SET_COIN_TYPE:
      return {
        ...state,
        selectedCoinData: action.payload,
        selectedYearData: action.payload.historicData[0],
        selectedMonthData: action.payload.historicData[0].monthPrices[0],
      };
    case SET_COIN_YEAR:
      return {
        ...state,
        selectedYearData: action.payload,
        selectedMonthData: action.payload.monthPrices[0],
      };
    case SET_COIN_MONTH:
      return {
        ...state,
        selectedMonthData: action.payload,
      };
    case SET_COIN_VALUE:
      return {
        ...state,
        inputedValue: action.payload,
      };
    default:
      return state;
  }
};
