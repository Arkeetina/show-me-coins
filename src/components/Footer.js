import React from 'react';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer-container">
        <div className="footer-block">
          <p className="footer-bold-text">Donate:</p>
          <ul>
            <li>BTC: 183BmZESrXBQ2hgU37LRCUzbyH7doHfEYP</li>
            <li>ETH: 0xe16abe79b087720ba5b0835bc8bd79b23f5ec6b2</li>
          </ul>
        </div>
        <div className="footer-block">
          <p className="footer-bold-text">Made by:</p>
          <ul>
            <li>Janko Prester: janko.prester@gmail.com</li>
            <li>Katerina Bezlepkina: katerinabez@gmail.com</li>

          </ul>
        </div>
      </div>
      <p className="footer-end">Copyright 2018 <span className="credit-link">App icon made by <a href="https://smashicons.com/">Smashicons</a> from www.flaticon.com</span></p>
    </div>
  </footer>
);

export default Footer;
