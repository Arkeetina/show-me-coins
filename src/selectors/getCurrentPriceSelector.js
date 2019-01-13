import find from 'lodash.find';

export default (rates, selectedCoin) => {
  const selectedCurrentCoinValue = find(rates, { id: selectedCoin });

  if (selectedCurrentCoinValue && selectedCurrentCoinValue.price_usd) {
    return parseInt(selectedCurrentCoinValue.price_usd, 0);
  }

  return 0;
};
