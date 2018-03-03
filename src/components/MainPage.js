import React from 'react';
import CgCalculatorMain from './CoinGuiltCalculator/CgCalculatorMain';
import CoinsTableMain from './CoinsTable/CoinsTableMain';

const MainPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <CgCalculatorMain />
      <hr />
      <CoinsTableMain />
    </div>
  </div>
);

export default MainPage;
