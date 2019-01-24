import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';

const CoinItem = ({
  name,
  price_usd,
  market_cap_usd,
  percent_change_24h,
}) => {
  const isPercentNegative = +percent_change_24h < 0;
  return (
    <div className="coin-table-row">
      <div className="coin-table-cell">{name}</div>
      <div className="coin-table-cell"><span className="coin-table-row-text">$ {numeral(+price_usd).format('0.00')}</span></div>
      <div className="coin-table-cell">$ {numeral(market_cap_usd).format('a')}</div>
      <div className={!isPercentNegative ? 'coin-table-cell green' : 'coin-table-cell red'}>{!isPercentNegative ? '+' : ''}{percent_change_24h}%</div>
    </div>
  );
};


CoinItem.propTypes = {
  price_usd: PropTypes.string.isRequired,
  market_cap_usd: PropTypes.string.isRequired,
  percent_change_24h: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CoinItem;
