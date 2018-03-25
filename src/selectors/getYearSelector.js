import _ from 'lodash';

export default (historicData, selectedYear) => _.find(historicData, { year: selectedYear }) ||
historicData[0];
