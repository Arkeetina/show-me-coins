import React from 'react';
import PropTypes from 'prop-types';

const CalculatorCoinTypesList = ({ coinsHistoricalData, onChangeCoin }) => (
  <select
    className="calculator-form-element select-crypto"
    name="chooseCrypto"
    onChange={onChangeCoin}
  >
    {coinsHistoricalData.map(coin => <option key={coin.id}>{coin.name}</option>)}
  </select>
);

const HistoricData = {
  historicData: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number,
    monthPrices: PropTypes.arrayOf(PropTypes.shape({
      monthId: PropTypes.number,
      price: PropTypes.number,
    })),
  })).isRequired,
  monthPrices: PropTypes.arrayOf(PropTypes.shape({
    monthId: PropTypes.number,
    price: PropTypes.number,
  })),
};

CalculatorCoinTypesList.propTypes = {
  coinsHistoricalData: PropTypes.arrayOf(PropTypes.shape(HistoricData)).isRequired,
  onChangeCoin: PropTypes.func.isRequired,
};

export default CalculatorCoinTypesList;
