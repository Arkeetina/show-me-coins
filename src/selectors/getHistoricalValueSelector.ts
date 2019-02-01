import * as find from 'lodash.find';
interface MonthPrices {monthId: number, price: number};

export default (selectedYearDataArray: MonthPrices[], selectedMonth: number): number => {
  const historicalMonth = find(selectedYearDataArray, { monthId: selectedMonth });

  if (historicalMonth && historicalMonth.price) {
    return historicalMonth.price;
  }

  return 0;
};

