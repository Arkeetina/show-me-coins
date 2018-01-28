import React from 'react';
import { connect } from 'react-redux';
import CoinsItem from './CoinsItem';
import sortSelector from '../selectors/sortSelector';


const CoinsList = props => (
  <tbody>
    {props.rates && props.rates.map((rate) => {
        return <CoinsItem key={rate.id} {...rate} />;
    }) }
  </tbody>
);

const mapStateToProps = (state) => {
  return {
    rates: sortSelector(state.coinsData, state.coinsFilters),
  };
};

export default connect(mapStateToProps)(CoinsList);
