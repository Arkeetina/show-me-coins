import * as React from 'react';

interface HistoricData {
  id: string,
  name: string,
};

interface CalculatorCoinTypesListProps {
  onChangeCoin: (event: {
    target: {
      value: string
    }
  }) => void,
  coinsHistoricalData: HistoricData[],
}

const CalculatorCoinTypesList: React.StatelessComponent<CalculatorCoinTypesListProps> = ({ coinsHistoricalData, onChangeCoin }) => (
  <select
    className="calculator-form-element select-crypto"
    name="chooseCrypto"
    onChange={onChangeCoin}
  >
    {coinsHistoricalData.map(coin => <option key={coin.id}>{coin.name}</option>)}
  </select>
);

export default CalculatorCoinTypesList;
