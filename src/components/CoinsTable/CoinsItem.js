import React from 'react';

const CoinItem = ({
  name,
  price_usd,
  market_cap_usd,
  percent_change_24h,
  onMouseOver,
  onMouseOut,
}) => (
  <tr>
    <td
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
    >
      {name}
    </td>
    <td>{price_usd}</td>
    <td>{market_cap_usd}</td>
    <td className={(+percent_change_24h > 0) ? 'green' : 'red'}>{percent_change_24h}%</td>
  </tr>
);

export default CoinItem;
