import React from 'react';
import { connect } from 'react-redux';

import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';
import SearchBar from '../common/SearchBar';

const CoinTable = props => (
  <div className="coin-table-container">
    <div className="coin-table-search">
      <SearchBar />
    </div>
    <div className="coint-table">
      <CoinsListFilter />
      <CoinsList />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    tooltipisHidden: state.coinsUI.tooltipisHidden,
    offSetTop: state.coinsUI.offSetTop,
    text: state.coinsUI.text,
  };
};

export default connect(mapStateToProps)(CoinTable);
