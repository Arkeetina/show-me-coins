import * as React from 'react';

import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';

const CoinTable: React.FunctionComponent<{}> = () => (
  <section className="table-section">
    <div className="coin-table-container">
      <CoinsListFilter />
      <CoinsList />
    </div>
  </section>
);



export default CoinTable;
