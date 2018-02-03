import React, { Component } from 'react';

import coinsHistoricData from '../../dummy_data/coin_data_history';

class CgCalculatorMain extends Component{
  onClick = () => {

  }

  render () {
      return (
        <div>
          <p> If I had invested</p>
          <input
            type="text"
            className="text-input"
            placeholder="USD"
          />
          <p> In </p>
          <select name="chooseCrypto">
            <option value={coinsHistoricData.btc}>{coinsHistoricData.btc.name}</option>
          </select>
          <p> On </p>
          <select name="chooseMonth">
          </select>
          <select name="chooseYear"></select>
          <p> ..how much money would I have today ? </p>
          <button>SHOW ME HOW MUCH</button>
        </div>
      );
  };
}

export default CgCalculatorMain;
