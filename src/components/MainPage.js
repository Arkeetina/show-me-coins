import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startBitCoinFetch } from '../actions/coinsData';

class MainPage extends Component {
  componentDidMount() {
    this.props.startBitCoinFetch();
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Boilerplate</h1>
          <p>Tag line for app.</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startBitCoinFetch: () => dispatch(startBitCoinFetch()),
});

export default connect(undefined, mapDispatchToProps)(MainPage);
