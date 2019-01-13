import React from 'react';
import { connect } from 'react-redux';

import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';

const CoinTable = () => (
  <section className="table-section">
    <div className="coin-table-container">
      <h1>Top 10 Cryptocurrencies</h1>
      <CoinsListFilter />
      <CoinsList />
    </div>
  </section>
);

const mapStateToProps = state => ({
  tooltipisHidden: state.coinsUI.tooltipisHidden,
  offSetTop: state.coinsUI.offSetTop,
  text: state.coinsUI.text,
});

export default connect(mapStateToProps)(CoinTable);
