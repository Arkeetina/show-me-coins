import React from 'react';

const CoinItem = ({ coin, rate }) => (
  <div>
    <span>{coin}</span>
    <span>{rate}</span>
  </div>
);

export default CoinItem;
