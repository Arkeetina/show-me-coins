import * as React from 'react';

interface HistoricData {
  year: number
}

interface CalculatorYearsListProps {
  historicData: HistoricData[],
  onChangeYear: (event: {
    target: {
      value: string
    }
  }) => void,
  selectedYear: number,
}

const CalculatorYearsList: React.StatelessComponent<CalculatorYearsListProps> = ({
  historicData,
  onChangeYear,
  selectedYear,
}) => (
  <select
    name="chooseYear"
    className="calculator-form-element select-year"
    onChange={onChangeYear}
    value={selectedYear}
  >
    {historicData.map(historicItem => <option key={historicItem.year}>{historicItem.year}</option>)}
  </select>
);

export default CalculatorYearsList;
