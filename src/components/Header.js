import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAppModeToCalculator, setAppModeToPrices } from '../actions/coinsUI';

const Header = ({ appMode, setModeToCalculator, setModeToPrices }) => (
  <header className="header-section">
    <div className="container header-container">
      <h1>CRYPTO HISTORICAL CALCULATOR</h1>
      {(appMode === 'calculator') &&
        <button className="header-mode-button" onClick={() => setModeToPrices()}>
          <i className="fas fa-chart-bar" style={{ marginTop: '2px' }} />
          <span className="header-button-text">Crypto Prices</span>
        </button>}
      {(appMode === 'prices') &&
        <button className="header-mode-button" onClick={() => setModeToCalculator()}>
          <i className="fas fa-calculator" style={{ marginTop: '2px' }} />
          <span className="header-button-text">Historical Calculator</span>
        </button>}
    </div>
  </header>
);

const mapStateToProps = state => ({
  appMode: state.coinsUI.appMode,
});

const mapDispatchToProps = dispatch => ({
  setModeToCalculator: () => dispatch(setAppModeToCalculator()),
  setModeToPrices: () => dispatch(setAppModeToPrices()),
});

Header.propTypes = {
  appMode: PropTypes.string.isRequired,
  setModeToPrices: PropTypes.func.isRequired,
  setModeToCalculator: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
