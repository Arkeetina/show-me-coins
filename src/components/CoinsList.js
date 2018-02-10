import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import CoinsItem from './CoinsItem';
import sortSelector from '../selectors/sortSelector';
import { showHoverBox, hideHoverBox } from '../actions/coinsUI';


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
    this.props.showHoverBox(symbol, textOffSetTop);
  }

  onMouseOut = () => {
    this.props.hideHoverBox();
  }

  render() {
    return (
      <Fragment>
        <tbody>
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
        </tbody>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showHoverBox: (symbol, textOffSetTop) => dispatch(showHoverBox(symbol, textOffSetTop)),
  hideHoverBox: () => dispatch(hideHoverBox()),
});

const mapStateToProps = (state) => {
  return {
    rates: sortSelector(state.coinsData, state.coinsFilters),
    hoverBoxisHidden: state.coinsUI.hoverBoxisHidden,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
