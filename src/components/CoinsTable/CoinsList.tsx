import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import CoinsItem from './CoinsItem';
import sortSelector from '../../selectors/sortSelector';


interface CoinsListItem {
  price_usd: string,
  market_cap_usd: string,
  percent_change_24h: string,
  name: string,
  id: number,
}
interface CoinsListProps {
  rates: CoinsListItem[];
}

const CoinsList = ({ rates }: CoinsListProps) => (
  <Fragment>
    <div className="coin-table-body">
      {rates && rates.map(rate => (<CoinsItem key={rate.id} {...rate} />)) }
    </div>
  </Fragment>
);


const mapStateToProps = state => ({
  rates: sortSelector(state.coinsData, state.coinsFilters),
});

export default connect(mapStateToProps, null)(CoinsList);
