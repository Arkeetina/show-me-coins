import React from 'react';
import { connect } from 'react-redux';
import CoinsItem from './CoinsItem';
import sortCoins from '../selectors/coins';


const CoinsList = props => (
  <div className="content-container">
    {props.rates && props.rates.map((rate) => {
        return <CoinsItem key={rate.id} {...rate} />;
    }) }
  </div>
);

const mapStateToProps = (state) => {
  return {
    rates: sortCoins(state.coinsData, state.coinsFilters),
  };
};

export default connect(mapStateToProps)(CoinsList);
