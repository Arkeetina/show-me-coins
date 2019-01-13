import find from 'lodash.find';

export default (historicData, selectedYear) => find(historicData, { year: selectedYear }) ||
historicData[0];
