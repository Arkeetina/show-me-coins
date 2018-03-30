import React from 'react';

const CgCalculatorMonthsList = ({ monthsData, onChangeMonth, selectedMonth }) => (
  <select name="chooseMonth" className="cg-calculator-form-element select-month" onChange={onChangeMonth} value={selectedMonth}>
    {monthsData.map((month) => {
      return (
        <option key={month.monthId}>{month.monthId}</option>
        );
    })}
  </select>
);

export default CgCalculatorMonthsList;
