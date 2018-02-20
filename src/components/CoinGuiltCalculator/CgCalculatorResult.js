import React from 'react';

const CgCalculatorResult = (props) => {
  if (!props.inputedValue) {
    return (
      <p>Please input the value..</p>
    );
  }

  if (!props.historicPrice) {
    return (
      <p>Please use proper historical price.</p>
    );
  }

  if (!props.currentPrice) {
    return (
      <p>Unable to access current price.</p>
    );
  }

  return (
    <div>
      <p>
        If you had invested {props.inputedValue} dollars in {props.coinType} on the highest point
        on {props.monthNumber},
        {props.yearName},
        today you would have: {(props.inputedValue / props.historicPrice) * props.currentPrice} $
      </p>
    </div>
  );
};


export default CgCalculatorResult;
