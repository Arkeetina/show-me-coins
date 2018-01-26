import React from 'react';
import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';

const MainPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <CoinsListFilter />
      <CoinsList />
    </div>
  </div>
);

export default MainPage;
