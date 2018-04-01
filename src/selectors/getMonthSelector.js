import _ from 'lodash';

export default (monthPrices, selectedMonth) => {
  const chosenMonth = _.find(monthPrices, { monthId: selectedMonth });

  if (chosenMonth && chosenMonth.monthId) {
    return chosenMonth.monthId;
  }

  return monthPrices[0].monthId;
};
