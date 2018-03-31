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
      <div className="sort-buttons-container">
        <a
          className="sort-button "
          onClick={this.onDownArrowClick}>
          <i className="fas fa-angle-down"></i>
        </a>
        <a
          className="sort-button"
          onClick={this.onUpArrowClick}>
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    );
  }
}

export default SortButtons;
