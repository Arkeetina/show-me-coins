import React, { Component } from 'react';
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
    this.props.showResult();
  }

  render() {
    return (
      <div>
        <p> If I had invested</p>
        <input
          type="text"
          className="text-input"
          placeholder="USD"
          id="cryptoInputvalue"
          onChange={this.onChangeValueInput}
        />
        <p> In </p>
        <CgCalculatorCoinTypesList
          coinsHistoricalData={this.props.coinsHistoricalData}
          onChangeCoin={this.onChangeSelectedCoin}
        />
        <p> On </p>
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
        <p> ..how much money would I have today ? </p>
        <button onClick = {this.onClickShowButton}>SHOW ME HOW MUCH</button>
        {(this.props.displayResult) &&
        <CgCalculatorResult 
          inputedValue={this.props.inputedValue}
          currentPrice={this.props.currentPrice}
          historicPrice={this.props.historicPrice}
          coinType={this.props.selectedCoinData.name}
          monthNumber={this.props.currentMonth}
          yearName={this.props.currentYear}
        />}
      </div>
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
