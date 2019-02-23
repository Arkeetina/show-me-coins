import * as React from 'react';
import { connect } from 'react-redux';

import { setAppModeToCalculator, setAppModeToPrices } from '../actions/coinsUI';
import { hideResult, setInvestedAmount } from '../actions/coinsCalculator';


interface HeaderProps {
  appMode: string,
  setModeToCalculator: () => void,
  setModeToPrices: () => void,
  setInputValue: (value: number) => void,
  hideRes: () => void,
  displayResult: () => void,
}

const Header: React.StatelessComponent<HeaderProps> = ({
  appMode,
  setModeToCalculator,
  setModeToPrices,
  setInputValue,
  hideRes,
  displayResult,
}) => (
  <header className="header-section">
    <div className="container header-container">
      <h1 className="logo-text">CRYPTO HISTORICAL CALCULATOR</h1>
      {(appMode === 'calculator') &&
        <button
          className="header-mode-button"
          onClick={() => {
            if (displayResult) {
              hideRes();
              setInputValue(0);
            }
            setModeToPrices();
          }}
        >
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
  displayResult: state.coinsCalculator.displayResult,
});

const mapDispatchToProps = dispatch => ({
  hideRes: () => dispatch(hideResult()),
  setInputValue: value => dispatch(setInvestedAmount({inputedValue: value})),
  setModeToCalculator: () => dispatch(setAppModeToCalculator()),
  setModeToPrices: () => dispatch(setAppModeToPrices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
