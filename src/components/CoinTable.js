import React from 'react';
import { connect } from 'react-redux';

import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';
import Tooltip from './common/Tooltip';
import SearchBar from './common/SearchBar';

const CoinTable = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <SearchBar />
      <Tooltip
        isHidden={props.tooltipisHidden}
        text={props.text}
        offSetTop={props.offSetTop}
      />
      <table>
        <CoinsListFilter />
        <CoinsList />
      </table>
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
