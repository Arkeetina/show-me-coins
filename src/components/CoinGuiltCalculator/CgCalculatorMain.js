import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import find from 'lodash.find';

import { selectCoinType, selectCoinYear, selectCoinMonth, setDollarValue, showResult } from '../../actions/coinsCalculator';
import getCurrentPriceSelector from '../../selectors/getCurrentPriceSelector';
import getHistoricalValueSelector from '../../selectors/getHistoricalValueSelector';
import CgCalculatorCoinTypesList from './CgCalculatorCoinTypesList';
import CgCalculatorYearsList from './CgCalculatorYearsList';
import CgCalculatorMonthsList from './CgCalculatorMonthsList';

class CgCalculatorMain extends Component {
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
    const yearName = parseInt(event.currentTarget.value, 10);
    this.props.selectCoinYear(find(this.props.selectedCoinData.historicData, { year: yearName }));
  }

  onChangeSelectedMonth = (event) => {
    const monthNumber = parseInt(event.currentTarget.value, 10);
    this.props
      .selectCoinMonth(find(this.props.selectedYearData.monthPrices, { monthId: monthNumber }));
  }

  onChangeValueInput = (event) => {
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
    }
  }

  render() {
    return (
      <Fragment>
        <section className="calculator-section">
          <div className="cg-calculator-background">
            <div className="cg-calculator-container">
              <div className="container">
                <div className="cg-calculator">
                  <div className="cg-calculator-row input-value-row">
                    <p className="cg-calculator-text"> If I had invested</p>
                    <input
                      type="text"
                      className="cg-calculator-form-element text-input"
                      placeholder="USD"
                      id="cryptosetDollarValue"
                      onChange={this.onChangeValueInput}
                    /> 
                    <span className="cg-calculator-form-symbol">$</span>
                    {!this.state.error && <p className="cg-calculator-small-text">(enter value in USD)</p>}
                    {this.state.error && <p className="cg__error">{this.state.error}</p>}
                  </div>
                  <div className="cg-calculator-row select-crypto-row">
                    <p className="cg-calculator-text"> In </p>
                    <CgCalculatorCoinTypesList
                      coinsHistoricalData={this.props.coinsHistoricalData}
                      onChangeCoin={this.onChangeSelectedCoin}
                    />
                    <p className="cg-calculator-small-text">(choose cryptocurrency)</p>
                  </div>
                  <div className="cg-calculator-row select-date-row">
                    <p className="cg-calculator-text"> On </p>
                    <CgCalculatorMonthsList
                      monthsData={this.props.selectedYearData.monthPrices}
                      onChangeMonth={this.onChangeSelectedMonth}
                      selectedMonth={this.props.currentMonth}
                    />
                    <CgCalculatorYearsList
                      historicData={this.props.selectedCoinData.historicData}
                      onChangeYear={this.onChangeSelectedYear}
                      selectedYear={this.props.currentYear}
                    />
                    <p className="cg-calculator-small-text">(choose time m/y. Highest price for chosen month will be used)</p>
                  </div>
                  <div className="cg-calculator-button-container">
                    <p className="cg-calculator-big-text"> ..how much money would I have today ? </p>
                    <button className="button cg-calculator-button" onClick={this.onClickShowButton}>SHOW ME HOW MUCH</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const calculatorData = state.coinsCalculator;

  return {
    rates: state.coinsData,
    coinsHistoricalData: calculatorData.coinsHistoricalData,
    selectedCoinData: calculatorData.selectedCoinData,
    selectedYearData: calculatorData.selectedYearData,
    selectedMonthData: calculatorData.selectedMonthData,
    currentYear: calculatorData.selectedYearData.year,
    currentMonth: calculatorData.selectedMonthData.monthId,
    currentPrice: getCurrentPriceSelector(state.coinsData, calculatorData.selectedCoinData.name),
    historicPrice: getHistoricalValueSelector(calculatorData.selectedYearData.monthPrices, calculatorData.selectedMonthData.monthId),
    inputedValue: calculatorData.inputedValue,
    displayResult: calculatorData.displayResult,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCoinType: coinType => dispatch(selectCoinType(coinType)),
  selectCoinYear: yearName => dispatch(selectCoinYear(yearName)),
  selectCoinMonth: monthNumber => dispatch(selectCoinMonth(monthNumber)),
  setDollarValue: inputedDollarValue => dispatch(setDollarValue(inputedDollarValue)),
  showResult: () => dispatch(showResult()),
});

CgCalculatorMain.propTypes = {
  selectCoinType: PropTypes.func.isRequired,
  selectCoinYear: PropTypes.func.isRequired,
  selectCoinMonth: PropTypes.func.isRequired,
  setDollarValue: PropTypes.func.isRequired,
  showResult: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CgCalculatorMain);
