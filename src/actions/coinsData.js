import axios from 'axios';
import { FETCH_COIN } from './types';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10';

export const fetchCoinData = rates => ({
  type: FETCH_COIN,
  rates,
});

export const startCoinFetch = () => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${ROOT_URL}`,
    })
      .then((response) => {
        dispatch(fetchCoinData(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

