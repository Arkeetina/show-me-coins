import React from 'react';

const CgCalculatorCoinTypesList = ({ coinsHistoricalData, onChangeCoin }) => (
  <select className="cg-calculator-form-element select-crypto" name="chooseCrypto" onChange={onChangeCoin}>
    {coinsHistoricalData.map((coin) => {
      return (
        <option key={coin.id}>{coin.name}</option>
      );
    })}
  </select>
);

export default CgCalculatorCoinTypesList;
