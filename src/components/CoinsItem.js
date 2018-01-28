import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const CoinItem = ({
  name,
  price_usd,
  market_cap_usd,
  percent_change_24h,
}) => (
  <tr>
    <td>{name}</td>
    <td>{price_usd}</td>
    <td>{market_cap_usd}</td>
    {(+percent_change_24h > 0) && <span className="green">{percent_change_24h}</span>}
    {(+percent_change_24h < 0) && <span className="red">{percent_change_24h}</span>}
  </tr>
);

CoinItem.propTypes = {
  name: PropTypes.string,
  price_usd: PropTypes.string,
  market_cap_usd: PropTypes.string,
  percent_change_24h: PropTypes.string,
};

export default CoinItem;
