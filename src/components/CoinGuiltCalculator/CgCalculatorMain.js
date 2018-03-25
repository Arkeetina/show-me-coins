import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { selectCoinType, selectCoinYear, selectCoinMonth, inputValue, showResult } from '../../actions/coinsCalculator';
import getYearSelector from '../../selectors/getYearSelector';
import getMonthSelector from '../../selectors/getMonthSelector';
import getCurrentPriceSelector from '../../selectors/getCurrentPriceSelector';
import getHistoricalValueSelector from '../../selectors/getHistoricalValueSelector';
import CgCalculatorResult from './CgCalculatorResult';
import CgCalculatorCoinTypesList from './CgCalculatorCoinTypesList';
import CgCalculatorYearsList from './CgCalculatorYearsList';
import CgCalculatorMonthsList from './CgCalculatorMonthsList';

class CgCalculatorMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    }
  }
  onChangeSelectedCoin = (event) => {
    const coinType = event.currentTarget.value;
    this.props.selectCoinType(_.find(this.props.coinsHistoricalData, {name: coinType}));
  }

  onChangeSelectedYear = (event) => {
    const yearName = parseInt(event.currentTarget.value);
    this.props.selectCoinYear(_.find(this.props.selectedCoinData.historicData, {year: yearName}));
  }

  onChangeSelectedMonth = (event) => {
    const monthNumber = parseInt(event.currentTarget.value);
    this.props.selectCoinMonth(_.find(this.props.selectedYearData.monthPrices, {monthId: monthNumber}));
  }

  onChangeValueInput = (event) => {
    const inputedDollarValue = parseInt(event.target.value);
    this.props.inputValue(inputedDollarValue);
  }

  onClickShowButton = () => {
    const { inputedValue } = this.props;
    if (!inputedValue) {
      this.setState(() => ({error: 'Please enter the amount'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.showResult();
    }
  }

  render() {
    return (
      <Fragment>
      <div className="cg-calculator-background">
      <div className="cg-calculator-container">
        <div className="cg-calculator">
          <div className="cg-calculator-row">
            <p className="cg-calculator-text"> If I had invested</p>
            <input
              type="text"
              className="cg-calculator-selector text-input"
              placeholder="USD"
              id="cryptoInputvalue"
              onChange={this.onChangeValueInput}
            />
            {!this.state.error && <p className="cg-calculator-text">(enter value in USD)</p>}
            {this.state.error && <p className="cg__error">{this.state.error}</p>}
          </div>
          <div className="cg-calculator-row">
            <p className="cg-calculator-text"> In </p>
            <CgCalculatorCoinTypesList
              coinsHistoricalData={this.props.coinsHistoricalData}
              onChangeCoin={this.onChangeSelectedCoin}
            />
            <p className="cg-calculator-text">(choose cryptocurrency)</p>
          </div>
          <div className="cg-calculator-row-date">
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
            <p className="cg-calculator-text">(choose time m/y)</p>
          </div>
          <div className="cg-calculator-button-container">
            <p className="cg-calculator-text"> ..how much money would I have today ? </p>
            <button className="cg-calculator-button button" onClick={this.onClickShowButton}>SHOW ME HOW MUCH</button>
          </div>
        </div>
      </div>
      </div>
      {(this.props.displayResult) &&
        <CgCalculatorResult 
          inputedValue={this.props.inputedValue}
          currentPrice={this.props.currentPrice}
          historicPrice={this.props.historicPrice}
          coinType={this.props.selectedCoinData.name}
          monthNumber={this.props.currentMonth}
          yearName={this.props.currentYear}
      />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
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
    displayResult: calculatorData.displayResult
  }
};

const mapDispatchToProps = (dispatch) => ({
  selectCoinType: (coinType) => dispatch(selectCoinType(coinType)),
  selectCoinYear: (yearName) => dispatch(selectCoinYear(yearName)),
  selectCoinMonth: (monthNumber) => dispatch(selectCoinMonth(monthNumber)),
  inputValue: (inputedDollarValue) => dispatch(inputValue(inputedDollarValue)),
  showResult: () => dispatch(showResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CgCalculatorMain);
