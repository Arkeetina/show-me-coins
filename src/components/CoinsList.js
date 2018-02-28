import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import CoinsItem from './CoinsItem';
import sortSelector from '../selectors/sortSelector';
import { showTooltip, hideTooltip } from '../actions/coinsUI';


class CoinsList extends Component {
  onMouseOver = (event) => {
    const textItem = event.target.innerText;
    const textOffSetTop = event.target.offsetTop;
    let symbol;
    this.props.rates.map((rate) => {
      if (rate.name === textItem) {
        symbol = rate.symbol;
        return symbol;
      }
    })
    this.props.showTooltip(symbol, textOffSetTop);
  }

  onMouseOut = () => {
    this.props.hideTooltip();
  }

  render() {
    return (
      <Fragment>
        <div className="coin-table-body">
          {this.props.rates && this.props.rates.map((rate) => {
            return (
              <CoinsItem
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                key={rate.id}
                {...rate}
              />
            );
          }) }
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showTooltip: (symbol, textOffSetTop) => dispatch(showTooltip(symbol, textOffSetTop)),
  hideTooltip: () => dispatch(hideTooltip()),
});

const mapStateToProps = (state) => {
  return {
    rates: sortSelector(state.coinsData, state.coinsFilters),
    tooltipisHidden: state.coinsUI.tooltipisHidden,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
