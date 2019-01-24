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
  rates: PropTypes.shape({}).isRequired,
};


export default connect(mapStateToProps, null)(CoinsList);
