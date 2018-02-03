import React from 'react';
import CgCalculatorMain from './CoinGuiltCalculator/CgCalculatorMain';
import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';
import SearchBar from './common/SearchBar';

const MainPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <CgCalculatorMain />
      <hr />
      <SearchBar />
      <table>
        <CoinsListFilter />
        <CoinsList />
      </table>
    </div>
  </div>
);

export default MainPage;
