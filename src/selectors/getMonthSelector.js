import find from 'lodash.find';

export default (monthPrices, selectedMonth) => {
  const chosenMonth = find(monthPrices, { monthId: selectedMonth });

  if (chosenMonth && chosenMonth.monthId) {
    return chosenMonth.monthId;
  }

  return monthPrices[0].monthId;
};
