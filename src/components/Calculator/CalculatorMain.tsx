import * as React from 'react';
import { connect } from 'react-redux';
import * as find from 'lodash.find';

import { selectCoinType, selectCoinYear, selectCoinMonth, setInvestedAmount, showResult } from '../../actions/coinsCalculator';
import getCurrentPriceSelector from '../../selectors/getCurrentPriceSelector';
import getHistoricalValueSelector from '../../selectors/getHistoricalValueSelector';
import CalculatorCoinTypesList from './CalculatorCoinTypesList';
import CalculatorYearsList from './CalculatorYearsList';
import CalculatorMonthsList from './CalculatorMonthsList';

interface MonthPrices {
  monthId: number,
  price: number,
};

interface HistoricYearItem {
  year: number,
  monthPrices: MonthPrices[],
}

interface HistoricDataItem {
  historicData: HistoricYearItem,
  monthPrices: MonthPrices[],
};

interface CoinsHistoricalData {
  historicData: HistoricDataItem[],
  id: string,
  name: string,
}

interface CalculatorMainProps {
  coinsHistoricalData: CoinsHistoricalData[],
  selectedCoinData: {
    historicData: HistoricYearItem[],
  },
  selectedYearData: {
    monthPrices: MonthPrices[],
  }
  inputedValue: number,
  currentMonth: number,
  currentYear: number,
  selectCoinType: typeof selectCoinType,
  selectCoinYear: typeof selectCoinYear,
  selectCoinMonth: typeof selectCoinMonth,
  setInvestedAmount: typeof setInvestedAmount,
  showResult: typeof showResult,
}

interface CalculatorMainState {
  error: string,
}

class CalculatorMain extends React.Component<CalculatorMainProps, CalculatorMainState> {
  state: Readonly<CalculatorMainState> = {
    error: ''
  };

  onChangeSelectedCoin = (event) => {
    const coinType = find(this.props.coinsHistoricalData, { name: event.currentTarget.value });
    this.props.selectCoinType(coinType);
  }

  onChangeSelectedYear = (event) => {
    const yearNumberObj = find(this.props.selectedCoinData.historicData, { year: parseInt(event.currentTarget.value, 10)});
    this.props.selectCoinYear(yearNumberObj);
  }

  onChangeSelectedMonth = (event) => {
    const monthNumberObj = find(this.props.selectedYearData.monthPrices, { monthId: parseInt(event.currentTarget.value, 10)});
    this.props.selectCoinMonth(monthNumberObj);
  }

  onChangeValueInput = (event) => {
    if (this.state.error) this.setState({ error: '' });
    const inputedValueNumb = parseInt(event.target.value, 10);
    this.props.setInvestedAmount({ inputedValue: inputedValueNumb});
  }

  onClickShowButton = () => {
    const { inputedValue } = this.props;
    if (!inputedValue) {
      this.setState(() => ({ error: 'Please enter the amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.showResult();
      const scrollOptions = {
        top: document.body.scrollHeight,
        bottom: 0,
        // behavior: 'smooth',
      }
      window.scrollTo(scrollOptions);
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
      <React.Fragment>
        <section className="calculator-section">
          <div className="calculator-container">
            <div className="calculator-row input-value-row calculator-text">
              <p className="calculator-text-spacing"> Amount</p>
              <div className="calculator-input-container">
                <input
                  type="text"
                  className={this.state.error ? `${inputClass} text-input__error` : inputClass}
                  placeholder="USD $"
                  id="cryptosetInvestedAmount"
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
      </React.Fragment>
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

const mapDispatchToProps = (dispatch: Function) => ({
  selectCoinType: (coinType: any) => dispatch(selectCoinType({ coinType })),
  selectCoinYear: (yearNumberObj: any) => dispatch(selectCoinYear({ yearNumberObj })),
  selectCoinMonth: (monthNumberObj: any) => dispatch(selectCoinMonth({ monthNumberObj })),
  setInvestedAmount: (inputedValue: any) => dispatch(setInvestedAmount({ inputedValue })),
  showResult: () => dispatch(showResult()),
});

// const HistoricData = {
//   historicData: PropTypes.arrayOf(PropTypes.shape({
//     year: PropTypes.number,
//     monthPrices: PropTypes.arrayOf(PropTypes.shape({
//       monthId: PropTypes.number,
//       price: PropTypes.number,
//     })),
//   })).isRequired,
//   monthPrices: PropTypes.arrayOf(PropTypes.shape({
//     monthId: PropTypes.number,
//     price: PropTypes.number,
//   })),
// };

// CalculatorMain.propTypes = {
//   coinsHistoricalData: PropTypes.arrayOf(PropTypes.shape(HistoricData)).isRequired,
//   selectedCoinData: PropTypes.shape({
//     historicData: PropTypes.arrayOf(PropTypes.shape({
//       year: PropTypes.number,
//       monthPrices: PropTypes.arrayOf(PropTypes.shape({
//         monthId: PropTypes.number,
//         price: PropTypes.number,
//       })),
//     })).isRequired,
//   }).isRequired,
//   selectedYearData: PropTypes.shape({
//     monthPrices: PropTypes.arrayOf(PropTypes.shape({
//       monthId: PropTypes.number,
//       price: PropTypes.number,
//     })),
//   }).isRequired,
//   inputedValue: PropTypes.number.isRequired,
//   currentMonth: PropTypes.number.isRequired,
//   currentYear: PropTypes.number.isRequired,
//   selectCoinType: PropTypes.func.isRequired,
//   selectCoinYear: PropTypes.func.isRequired,
//   selectCoinMonth: PropTypes.func.isRequired,
//   setInvestedAmount: PropTypes.func.isRequired,
//   showResult: PropTypes.func.isRequired,
// };


export default connect(mapStateToProps, mapDispatchToProps)(CalculatorMain);
