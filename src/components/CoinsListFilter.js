import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  sortByNameAscending,
  sortByAmountAscending,
  setTextFilter,
  sortByAmountDescending,
  sortByNameDescending,
} from '../actions/coinsFilters';

class CoinsListFilter extends Component {
  onSortByNameAscending = () => {
    this.props.sortByNameAscending();
  };

  onSortByNameDescending = () => {
    this.props.sortByNameDescending();
  };

  onSortByAmountAscending = () => {
    this.props.sortByAmountAscending();
  };

  onSortByAmountDescending = () => {
    this.props.sortByAmountDescending();
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            placeholder="Search Coins"
            value={this.props.coinsFilters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div>
          <span>Coin Name</span>
          <a onClick={this.onSortByNameAscending}>
            <i className="fas fa-long-arrow-alt-up"></i>
          </a>
          <a onClick={this.onSortByNameDescending}>
            <i className="fas fa-long-arrow-alt-down"></i>
          </a>
        </div>
        <div>
          <span>Coin Amount</span>
          <a onClick={this.onSortByAmountAscending}>
            <i className="fas fa-long-arrow-alt-up"></i>
          </a>
          <a onClick={this.onSortByAmountDescending}>
            <i className="fas fa-long-arrow-alt-down"></i>
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  coinsFilters: state.coinsFilters,
});

const mapDispatchToProps = (dispatch) => ({
  sortByNameAscending: () => dispatch(sortByNameAscending()),
  sortByAmountAscending: () => dispatch(sortByAmountAscending()),
  sortByNameDescending: () => dispatch(sortByNameDescending()),
  sortByAmountDescending: () => dispatch(sortByAmountDescending()),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinsListFilter);
