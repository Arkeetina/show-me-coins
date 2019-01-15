import React from 'react';

const CgCalculatorResult = ({
  inputedValue,
  historicPrice,
  currentPrice,
  coinType,
  monthNumber,
  yearNumber,
}) => {
  const date = new Date(yearNumber, monthNumber);
  var options = { year: 'numeric', month: 'long'};

  return (
    <div className="cg-result">
      <p>
        If you had invested <span className="cg-result-text-bold">{inputedValue}$</span>  in {coinType} on the highest point
      </p>
      <p>in <span className="cg-result-text-bold">{date.toLocaleDateString('en-IN', options)}</span>,
        today you would have: <span className="cg-result-text-bold">{parseInt(((inputedValue / historicPrice) * currentPrice), 0).toLocaleString()}$</span>
      </p>
    </div>
  )};

export default CgCalculatorResult;
