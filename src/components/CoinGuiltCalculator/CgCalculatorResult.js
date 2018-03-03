import React from 'react';

const CgCalculatorResult = ({
  inputedValue,
  historicPrice,
  currentPrice,
  coinType,
  monthNumber,
  yearName,
}) => {
  if (!inputedValue) {
    return (
      <p>Please input the value..</p>
    );
  }

  if (!historicPrice) {
    return (
      <p>Please use proper historical price.</p>
    );
  }

  if (!currentPrice) {
    return (
      <p>Unable to access current price.</p>
    );
  }

  return (
    <div>
      <p>
        If you had invested {inputedValue} dollars in {coinType} on the highest point
        on {monthNumber},
        {yearName},
        today you would have: {(inputedValue / historicPrice) * currentPrice} $
      </p>
    </div>
  );
};

export default CgCalculatorResult;
