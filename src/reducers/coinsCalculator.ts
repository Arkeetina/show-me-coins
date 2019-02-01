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

interface MonthPrices {monthId: number, price: number};
interface HistoricData { year: number, monthPrices: MonthPrices[] }

interface State {
  coinsHistoricalData,
  selectedCoinData: {
    id: string,
    name: string,
    historicData: HistoricData[],
  },
  selectedYearData: HistoricData,
  selectedMonthData: MonthPrices,
  inputedValue: number,
  displayResult: boolean,
}

export default (state: State = INITIAL_COIN_CALCULATOR_STATE, action: any) => {
  switch (action.type) {
    case SET_COIN_TYPE:
      return {
        ...state,
        selectedCoinData: action.payload.coinType,
        selectedYearData: action.payload.coinType.historicData[0],
        selectedMonthData: action.payload.coinType.historicData[0].monthPrices[0],
        displayResult: false,
      };
    case SET_COIN_YEAR:
      return {
        ...state,
        selectedYearData: action.payload.yearNumberObj,
        selectedMonthData: action.payload.yearNumberObj.monthPrices[0],
        displayResult: false,
      };
    case SET_COIN_MONTH:
      return {
        ...state,
        selectedMonthData: action.payload.monthNumberObj,
        displayResult: false,
      };
    case SET_COIN_VALUE:
      return {
        ...state,
        inputedValue: action.payload.inputedValue.inputedValue,
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
