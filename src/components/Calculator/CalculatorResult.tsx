import * as React from 'react';

interface CalculatorResultProps {
  inputedValue: number,
  historicPrice: number,
  currentPrice: number,
  coinType: string,
  monthNumber: number,
  yearNumber: number,
}
const CalculatorResult: React.StatelessComponent<CalculatorResultProps> = ({
  inputedValue,
  historicPrice,
  currentPrice,
  coinType,
  monthNumber,
  yearNumber,
}) => {
  const date = new Date(yearNumber, monthNumber);
  const options = { year: 'numeric', month: 'long' };
  const result = (inputedValue / historicPrice) * currentPrice;

  return (
    <div className="calculator-result">
      <p>
        If you had invested <span className="calculator-result-text-bold">{inputedValue}$</span>  in {coinType} on the highest point
      </p>
      <p>in <span className="calculator-result-text-bold">{date.toLocaleDateString('en-IN', options)}</span>,
        today you would have: <span className="calculator-result-text-bold">{result.toLocaleString()}$</span>
      </p>
    </div>
  );
};

export default CalculatorResult;
