import axios from 'axios';
import { history } from '../routers/AppRouter.js';
import { action, payload } from "ts-action";
import { SET_COIN_RATES } from './types';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

interface RatesItems {
  id: string,
  name: string,
  price_usd: string,
  market_cap_usd: string,
  percent_change_24h: string,
}

export const setCoinData = action(SET_COIN_RATES, payload<{ rates: RatesItems[] }>());

const setArray = (array) => {
  return array.map(coin => {
    return {
      id: coin.CoinInfo.FullName.toLowerCase(),
      name: coin.CoinInfo.FullName,
      price_usd: `${coin.RAW.USD.PRICE}`,
      market_cap_usd: `${coin.RAW.USD.MKTCAP}`,
      percent_change_24h: `${coin.RAW.USD.CHANGEPCTDAY.toFixed(2)}`,
    }
  })
}
export const startCoinFetch = () => {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: `${ROOT_URL}`,
      headers: {
        authorization: `Apikey ${process.env.API_KEY}`,
      },
    })
    .then((response: any ) => {
      dispatch(setCoinData(setArray(response.data.Data)));
    })
    .catch((error) => {
      history.push('/error')
    });
  };
};

