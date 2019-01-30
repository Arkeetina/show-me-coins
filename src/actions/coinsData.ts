import axios from 'axios';
import { action, payload } from "ts-action";
import { SET_COIN_RATES } from './types';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10';

type RatesItems = {
  id: string,
  name: string,
  price_usd: string,
  market_cap_usd: string,
  percent_change_24h: string,
}

export const setCoinData = action(SET_COIN_RATES, payload<{ rates: RatesItems[] }>());

export const startCoinFetch = () => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${ROOT_URL}`,
    })
      .then((response: any ) => {
        dispatch(setCoinData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

