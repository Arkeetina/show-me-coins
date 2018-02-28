import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CoinItem = ({
  name,
  price_usd,
  market_cap_usd,
  percent_change_24h,
  onMouseOver,
  onMouseOut,
}) => (
  <div className="coin-table-row">
    <div
      className="coin-table-cell"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {name}
    </div>
    <div className="coin-table-cell">{price_usd}</div>
    <div className="coin-table-cell">{market_cap_usd}</div>
    <div className={(+percent_change_24h > 0) ? 'coin-table-cell green' : 'coin-table-cell red'}>{percent_change_24h}%</div>
  </div>
);

export default CoinItem;