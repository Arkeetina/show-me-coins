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
      <div className="sort-buttons-containter">
        <button
          className="sort-button"
          onClick={this.onUpArrowClick}>
          <i className="fas fa-long-arrow-alt-up lg"></i>
        </button>
        <button
          className="sort-button"
          onClick={this.onDownArrowClick}>
          <i className="fas fa-long-arrow-alt-down lg"></i>
        </button>
      </div>
    );
  }
}

export default SortButtons;
