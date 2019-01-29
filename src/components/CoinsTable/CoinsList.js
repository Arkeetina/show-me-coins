import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CoinsItem from './CoinsItem';
import sortSelector from '../../selectors/sortSelector';


const CoinsList = ({ rates }) => (
  <Fragment>
    <div className="coin-table-body">
      {rates && rates.map(rate => (<CoinsItem key={rate.id} {...rate} />)) }
    </div>
  </Fragment>
);


const mapStateToProps = state => ({
  rates: sortSelector(state.coinsData, state.coinsFilters),
});

CoinsList.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.shape({
    price_usd: PropTypes.string.isRequired,
    market_cap_usd: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};


export default connect(mapStateToProps, null)(CoinsList);
