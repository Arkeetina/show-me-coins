import React from 'react';

const CgCalculatorResult = ({
  inputedValue,
  historicPrice,
  currentPrice,
  coinType,
  monthNumber,
  yearName,
}) => (
  <div className="cg-result">
    <p>
      If you had invested {inputedValue} dollars in {coinType} on the highest point
      on {monthNumber},
      {yearName},
      today you would have: {(inputedValue / historicPrice) * currentPrice} $
    </p>
  </div>
);

export default CgCalculatorResult;
