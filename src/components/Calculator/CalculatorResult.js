import React from 'react';
import PropTypes from 'prop-types';

const CalculatorResult = ({
  inputedValue,
  historicPrice,
  currentPrice,
  coinType,
  monthNumber,
  yearNumber,
}) => {
  const date = new Date(yearNumber, monthNumber);
  const options = { year: 'numeric', month: 'long' };

  return (
    <div className="calculator-result">
      <p>
        If you had invested <span className="calculator-result-text-bold">{inputedValue}$</span>  in {coinType} on the highest point
      </p>
      <p>in <span className="calculator-result-text-bold">{date.toLocaleDateString('en-IN', options)}</span>,
        today you would have: <span className="calculator-result-text-bold">{parseInt(((inputedValue / historicPrice) * currentPrice), 0).toLocaleString()}$</span>
      </p>
    </div>
  );
};

CalculatorResult.propTypes = {
  inputedValue: PropTypes.number.isRequired,
  historicPrice: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  coinType: PropTypes.string.isRequired,
  monthNumber: PropTypes.number.isRequired,
  yearNumber: PropTypes.number.isRequired,
};

export default CalculatorResult;
