import React from 'react';
import CoinsListFilter from './CoinsListFilter';
import CoinsList from './CoinsList';
import SearchBar from './common/SearchBar';

const MainPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <SearchBar />
      <table>
        <CoinsListFilter />
        <CoinsList />
      </table>
    </div>
  </div>
);

export default MainPage;
