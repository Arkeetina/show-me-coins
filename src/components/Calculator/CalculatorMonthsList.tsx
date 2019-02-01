import * as React from 'react';

interface HistoricData {
  monthId: number
}

interface CalculatorMonthsListProps {
  monthsData: HistoricData[],
  onChangeMonth: (currentTarget: {
    target: {
      value: string
    }
  }) => void,
  selectedMonth: number,
}

const CalculatorMonthsList: React.StatelessComponent<CalculatorMonthsListProps>  = ({
  monthsData,
  onChangeMonth,
  selectedMonth,
}) => (
  <select
    name="chooseMonth"
    className="calculator-form-element select-month"
    onChange={onChangeMonth}
    value={selectedMonth}
  >
    {monthsData.map(month => <option key={month.monthId}>{month.monthId}</option>)}
  </select>
);

export default CalculatorMonthsList;
