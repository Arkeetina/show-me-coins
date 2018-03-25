import _ from 'lodash';

export default (selectedYear, selectedMonth) => {
  const historicalMonth = _.find(selectedYear, { monthId: selectedMonth });

  if (historicalMonth && historicalMonth.price) {
    return historicalMonth.price;
  }

  return 0;
};

