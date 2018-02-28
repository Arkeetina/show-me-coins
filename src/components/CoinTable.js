import React from 'react';
import { connect } from 'react-redux';

import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';
import Tooltip from './common/Tooltip';
import SearchBar from './common/SearchBar';

const CoinTable = props => (
  <div className="box-layout">
    <div className="coin-table-container">
      <SearchBar />
      <Tooltip
        isHidden={props.tooltipisHidden}
        text={props.text}
        offSetTop={props.offSetTop}
      />
      <div>
        <CoinsListFilter />
        <CoinsList />
      </div>
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
