import React, { Component } from 'react';
import { connect } from 'react-redux';

class SortButtons extends Component {
  onUpArrowClick = () => {
    this.props.onUpArrowClick();
  }

  onDownArrowClick = () => {
    this.props.onDownArrowClick();
  }

  render() {
    return (
      <div>
        <a onClick={this.onUpArrowClick}>
          <i className="fas fa-long-arrow-alt-up"></i>
        </a>
        <a onClick={this.onDownArrowClick}>
          <i className="fas fa-long-arrow-alt-down"></i>
        </a>
      </div>
    );
  }
}

export default SortButtons;
