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
        <button
          className="sort-button"
          style={{ marginRight: '10px' }}
          onClick={this.onDownArrowClick}
        >
          <i className="fas fa-angle-down" />
        </button>
        <button
          className="sort-button"
          onClick={this.onUpArrowClick}
        >
          <i className="fas fa-angle-up" />
        </button>
      </div>
    );
  }
}

export default SortButtons;
