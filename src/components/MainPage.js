import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import getCurrentPriceSelector from '../selectors/getCurrentPriceSelector';
import getHistoricalValueSelector from '../selectors/getHistoricalValueSelector';
import CgCalculatorMain from './CoinGuiltCalculator/CgCalculatorMain';
import CoinsTableMain from './CoinsTable/CoinsTableMain';
import CgCalculatorResult from '../components/CoinGuiltCalculator/CgCalculatorResult';
import Footer from './Footer';

// <CoinsTableMain />

const MainPage = ({
  inputedValue,
  currentPrice,
  historicPrice,
  selectedCoinData,
  currentMonth,
  currentYear,
  displayResult,
  appMode,
}) => (
  <div className="box-layout">
    <Header />
    <div className="main-container">
      <div className="container">

        {appMode === 'calculator' &&
          <div>
            <h3 className="section-title section-title-spacing">Calculate Historic Crypto Price</h3>
            <CgCalculatorMain />
          </div>}

        {appMode === 'prices' &&
          <div>
            <h3 className="section-title section-title-spacing">Current Crypto Prices</h3>
            <CoinsTableMain />
          </div>}

      </div>
    </div>
    {displayResult &&
      <CgCalculatorResult
        inputedValue={inputedValue}
        currentPrice={currentPrice}
        historicPrice={historicPrice}
        coinType={selectedCoinData.name}
        monthNumber={currentMonth}
        yearNumber={currentYear}
      />}
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  const {
    coinsHistoricalData,
    selectedCoinData,
    selectedYearData,
    selectedMonthData,
    inputedValue,
    displayResult,
  } = state.coinsCalculator;

  return {
    rates: state.coinsData,
    coinsHistoricalData,
    selectedCoinData,
    appMode: state.coinsUI.appMode,
    currentYear: selectedYearData.year,
    currentMonth: selectedMonthData.monthId,
    currentPrice:
      getCurrentPriceSelector(state.coinsData, selectedCoinData.name),
    historicPrice:
      getHistoricalValueSelector(selectedYearData.monthPrices, selectedMonthData.monthId),
    inputedValue,
    displayResult,
  };
};

MainPage.propTypes = {
  appMode: PropTypes.string.isRequired,
  inputedValue: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  historicPrice: PropTypes.number.isRequired,
  selectedCoinData: PropTypes.shape({}).isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  displayResult: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(MainPage);

