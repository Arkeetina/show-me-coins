import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import find from 'lodash.find';

import { selectCoinType, selectCoinYear, selectCoinMonth, setDollarValue, showResult } from '../../actions/coinsCalculator';
import getCurrentPriceSelector from '../../selectors/getCurrentPriceSelector';
import getHistoricalValueSelector from '../../selectors/getHistoricalValueSelector';
import CalculatorCoinTypesList from './CalculatorCoinTypesList';
import CalculatorYearsList from './CalculatorYearsList';
import CalculatorMonthsList from './CalculatorMonthsList';

class CalculatorMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  onChangeSelectedCoin = (event) => {
    const coinType = event.currentTarget.value;
    this.props.selectCoinType(find(this.props.coinsHistoricalData, { name: coinType }));
  }

  onChangeSelectedYear = (event) => {
    const yearNumber = parseInt(event.currentTarget.value, 10);
    this.props.selectCoinYear(find(this.props.selectedCoinData.historicData, { year: yearNumber }));
  }

  onChangeSelectedMonth = (event) => {
    const monthNumber = parseInt(event.currentTarget.value, 10);
    this.props
      .selectCoinMonth(find(this.props.selectedYearData.monthPrices, { monthId: monthNumber }));
  }

  onChangeValueInput = (event) => {
    if (this.state.error) this.setState({ error: '' });
    const inputedDollarValue = parseInt(event.target.value, 10);
    this.props.setDollarValue(inputedDollarValue);
  }

  onClickShowButton = () => {
    const { inputedValue } = this.props;
    if (!inputedValue) {
      this.setState(() => ({ error: 'Please enter the amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.showResult();
      window.scrollTo({ // eslint-disable-line
        top: document.body.scrollHeight, // eslint-disable-line
        bottom: 0,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const inputClass = 'calculator-form-element text-input';

    const {
      selectedCoinData,
      coinsHistoricalData,
      currentMonth,
      currentYear,
      selectedYearData,
    } = this.props;
    return (
      <Fragment>
        <section className="calculator-section">
          <div className="calculator-container">
            <div className="calculator-row input-value-row calculator-text">
              <p className="calculator-text-spacing"> Amount</p>
              <div className="calculator-input-container">
                <input
                  type="text"
                  className={this.state.error ? `${inputClass} text-input__error` : inputClass}
                  placeholder="USD $"
                  id="cryptosetDollarValue"
                  onChange={this.onChangeValueInput}
                />
                {this.state.error && <p className="calculator-error calculator-error-spacing">{this.state.error}</p>}
              </div>

            </div>

            <div className="calculator-row select-crypto-row calculator-text">
              <p className="calculator-text-spacing extra-margin"> Cryptocurrency </p>

              <div className="calculator-input-container">
                <CalculatorCoinTypesList
                  coinsHistoricalData={coinsHistoricalData}
                  onChangeCoin={this.onChangeSelectedCoin}
                />
              </div>
            </div>

            <div className="calculator-row select-date-row calculator-text">
              <p className="calculator-text-spacing">Date</p>
              <div className="calculator-input-container">
                <CalculatorMonthsList
                  monthsData={selectedYearData.monthPrices}
                  onChangeMonth={this.onChangeSelectedMonth}
                  selectedMonth={currentMonth}
                />
                <CalculatorYearsList
                  historicData={selectedCoinData.historicData}
                  onChangeYear={this.onChangeSelectedYear}
                  selectedYear={currentYear}
                />
              </div>

            </div>

            <div className="calculator-button-container">
              <button className="button calculator-button" onClick={this.onClickShowButton}>CALCULATE</button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

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
    selectedYearData,
    selectedMonthData,
    currentYear: selectedYearData.year,
    currentMonth: selectedMonthData.monthId,
    currentPrice: getCurrentPriceSelector(state.coinsData, selectedCoinData.name),
    historicPrice:
      getHistoricalValueSelector(selectedYearData.monthPrices, selectedMonthData.monthId),
    inputedValue,
    displayResult,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCoinType: coinType => dispatch(selectCoinType(coinType)),
  selectCoinYear: yearNumber => dispatch(selectCoinYear(yearNumber)),
  selectCoinMonth: monthNumber => dispatch(selectCoinMonth(monthNumber)),
  setDollarValue: inputedDollarValue => dispatch(setDollarValue(inputedDollarValue)),
  showResult: () => dispatch(showResult()),
});

const HistoricData = {
  historicData: PropTypes.number,
  monthPrices: PropTypes.number,
};

CalculatorMain.propTypes = {
  coinsHistoricalData: PropTypes.arrayOf(HistoricData).isRequired,
  selectedCoinData: PropTypes.shape({}).isRequired,
  selectedYearData: PropTypes.shape({}).isRequired,
  inputedValue: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  selectCoinType: PropTypes.func.isRequired,
  selectCoinYear: PropTypes.func.isRequired,
  selectCoinMonth: PropTypes.func.isRequired,
  setDollarValue: PropTypes.func.isRequired,
  showResult: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CalculatorMain);
