import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startCoinFetch } from '../actions/coinsData';
import CoinItem from './CoinItem';
import uuid from 'uuid';

class MainPage extends Component {
  // coinRender = () => {
  //   if (!this.props.BTC_rate) {
  //     return <div>Loading</div>
  //   } else {
  //     return <CoinItem
  //       key={uuid()}
  //       coinRate={this.props.BTC_rate}
  //     />
  //   }
  // }

  render() {
    const { rates } = this.props;
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <CoinItem key={uuid()} coin={rates.bitcoin.name} rate={rates.bitcoin.price_usd}/>
          <CoinItem key={uuid()} coin={rates.ethereum.name} rate={rates.ethereum.price_usd}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startCoinFetch: () => dispatch(startCoinFetch()),
});

const mapStateToProps = state => ({
  rates: state.coinsData.rates,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
