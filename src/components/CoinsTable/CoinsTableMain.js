import React from 'react';
import { connect } from 'react-redux';

import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';
import Tooltip from '../common/Tooltip';
import SearchBar from '../common/SearchBar';

const CoinsTableMain = props => (
  <div>
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
);

const mapStateToProps = state => ({
  tooltipisHidden: state.coinsUI.tooltipisHidden,
  offSetTop: state.coinsUI.offSetTop,
  text: state.coinsUI.text,
});

export default connect(mapStateToProps)(CoinsTableMain);
