import find from 'lodash.find';

export default (selectedYear, selectedMonth) => {
  const historicalMonth = find(selectedYear, { monthId: selectedMonth });

  if (historicalMonth && historicalMonth.price) {
    return historicalMonth.price;
  }

  return 0;
};

