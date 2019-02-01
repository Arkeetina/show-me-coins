import * as find from 'lodash.find';

interface RatesItems {
  id: string,
  name: string,
  price_usd: string,
  market_cap_usd: string,
  percent_change_24h: string,
}

export default (rates: RatesItems[], selectedCoin: string): number => {
  const selectedCurrentCoinValue = find(rates, { id: selectedCoin });

  if (selectedCurrentCoinValue && selectedCurrentCoinValue.price_usd) {
    return parseInt(selectedCurrentCoinValue.price_usd, 0);
  }

  return 0;
};
