import axios from 'axios';

const ROOT_URl = 'https://rest.coinapi.io';
const API_KEY = '018743E6-9486-4FE1-A8CD-B64784A7710C';

export const fetchBitCoinData = () => ({
  type: 'FETCH_BITCOIN',
});

export const startBitCoinFetch = () => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${ROOT_URl}/v1/exchangerate/BTC/USD?`,
      headers: { 'X-CoinAPI-Key': API_KEY },
    })
      .then((response) => {
        dispatch(fetchBitCoinData(response));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
