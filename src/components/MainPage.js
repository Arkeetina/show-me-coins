import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startCoinFetch } from '../actions/coinsData';
import CoinItem from './CoinItem';
import uuid from 'uuid';

class MainPage extends Component {
  render() {
    const { rates } = this.props;
    if (!rates) {
      return null;
    }
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          {rates.map( (rate) => {
            return <CoinItem  key={rate.id} coin={rate.name} rate={rate.price_usd}/>
          })
        }
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
