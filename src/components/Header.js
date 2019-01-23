import React from 'react';

const Header = () => (
  <header className="header-section">
    <div className="container header-container">
      <h1>CRYPTO HISTORICAL CALCULATOR</h1>
      {/* <button className="header-mode-button">
        <i className="fas fa-chart-bar" style={{ marginTop: '2px' }} />
        <span className="header-button-text">Crypto Prices</span>
      </button> */}
      <button className="header-mode-button">
        <i className="fas fa-calculator" style={{ marginTop: '2px' }} />
        <span className="header-button-text">Historical Calculator</span>
      </button>
    </div>
  </header>
);

export default Header;
