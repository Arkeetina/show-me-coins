import React from 'react';

const CgCalculatorCoinTypesList = ({ coinsHistoricalData, onChangeCoin }) => (
  <select id="cryptoSelectCrypto" name="chooseCrypto" onChange={onChangeCoin}>
    {coinsHistoricalData.map((coin) => {
      return (
        <option key={coin.id}>{coin.name}</option>
      );
    })}
  </select>
);

export default CgCalculatorCoinTypesList;
