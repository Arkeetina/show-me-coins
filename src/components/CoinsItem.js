import React from 'react';
import PropTypes from 'prop-types';

const CoinItem = ({
  name,
  price_usd,
  market_cap_usd,
  percent_change_24h,
  onMouseOver,
  onMouseOut,
}) => (
  <tr >
    <td
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {name}
    </td>
    <td>{price_usd}</td>
    <td>{market_cap_usd}</td>
    <td className={(+percent_change_24h > 0) ? 'green' : 'red'}>{percent_change_24h}%</td>
  </tr>
);

CoinItem.propTypes = {
  name: PropTypes.string,
  price_usd: PropTypes.string,
  market_cap_usd: PropTypes.string,
  percent_change_24h: PropTypes.string,
};

export default CoinItem;
