import React from 'react';
import PropTypes from 'prop-types';

const CalculatorMonthsList = ({ monthsData, onChangeMonth, selectedMonth }) => (
  <select
    name="chooseMonth"
    className="calculator-form-element select-month"
    onChange={onChangeMonth}
    value={selectedMonth}
  >
    {monthsData.map(month => <option key={month.monthId}>{month.monthId}</option>)}
  </select>
);

CalculatorMonthsList.propTypes = {
  monthsData: PropTypes.arrayOf(PropTypes.shape({
    monthId: PropTypes.number.isRequired,
  })).isRequired,
  onChangeMonth: PropTypes.func.isRequired,
  selectedMonth: PropTypes.number.isRequired,
};

export default CalculatorMonthsList;
