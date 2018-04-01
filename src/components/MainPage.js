import React from 'react';
import Header from './Header';
import CgCalculatorMain from './CoinGuiltCalculator/CgCalculatorMain';
import CoinsTableMain from './CoinsTable/CoinsTableMain';
import Footer from './Footer';

const MainPage = () => (
  <div className="box-layout">
    <Header />
    <CgCalculatorMain />
    <CoinsTableMain />
    <Footer />
  </div>
);

export default MainPage;
