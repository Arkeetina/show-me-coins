import React, { Component } from 'react';
import uuid from 'uuid';

const CoinItem = ({ price_usd, name }) => (
  <div>
    <span>{name}</span>
    <span>{price_usd}</span>
  </div>
);

export default CoinItem;
