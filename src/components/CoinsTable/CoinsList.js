import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import CoinsItem from './CoinsItem';
import sortSelector from '../../selectors/sortSelector';


const CoinsList = props => (
  <Fragment>
    <div className="coin-table-body">
      {props.rates && props.rates.map(rate => (<CoinsItem key={rate.id} {...rate} />)) }
    </div>
  </Fragment>
);


const mapStateToProps = (state) => {
  return {
    rates: sortSelector(state.coinsData, state.coinsFilters),
  };
};

export default connect(mapStateToProps, null)(CoinsList);
