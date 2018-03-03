import React from 'react';

const CgCalculatorMonthsList = ({ monthsData, onChangeMonth, selectedMonth }) => (
  <select name="chooseYear" id="cryptoSelectYear" onChange={onChangeMonth} value={selectedMonth}>
    {monthsData.map((month) => {
      return (
        <option key={month.monthId}>{month.monthId}</option>
        );
    })}
  </select>
);

export default CgCalculatorMonthsList;
