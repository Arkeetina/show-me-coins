import React from 'react';

const CgCalculatorYearsList = ({ historicData, onChangeYear, selectedYear }) => (
  <select name="chooseYear" id="cryptoSelectYear" onChange={onChangeYear} value={selectedYear}>
    {historicData.map((historicItem) => {
      return (
        <option key={historicItem.year}>{historicItem.year}</option>
      );
    })}
  </select>
);

export default CgCalculatorYearsList;
