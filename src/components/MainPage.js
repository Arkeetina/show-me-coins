import React, { Component } from 'react';

class MainPage extends Component {
  redner() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Boilerplate</h1>
          <p>Tag line for app.</p>
        </div>
      </div>
    )
  }
}

export default MainPage;
