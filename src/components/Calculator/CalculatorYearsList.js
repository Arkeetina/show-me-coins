import React from 'react';
import PropTypes from 'prop-types';

const CalculatorYearsList = ({ historicData, onChangeYear, selectedYear }) => (
  <select
    name="chooseYear"
    className="calculator-form-element select-year"
    onChange={onChangeYear}
    value={selectedYear}
  >
    {historicData.map(historicItem => <option key={historicItem.year}>{historicItem.year}</option>)}
  </select>
);

CalculatorYearsList.propTypes = {
  historicData: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number,
  })).isRequired,
  onChangeYear: PropTypes.func.isRequired,
  selectedYear: PropTypes.number.isRequired,
};

export default CalculatorYearsList;
