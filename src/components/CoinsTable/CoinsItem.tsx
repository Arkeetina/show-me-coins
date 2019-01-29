import React, { FunctionComponent } from 'react';
import numeral from 'numeral';


interface CointItemProps {
  name: string;
  price_usd: string;
  market_cap_usd: string;
  percent_change_24h: string;
}

const CoinItem: FunctionComponent<CointItemProps> = ({
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

export default CoinItem;
