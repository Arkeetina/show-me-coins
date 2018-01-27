import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './common/SearchBar';
import SortButtons from './common/SortButtons';
import {
  sortByNameAscending,
  sortByAmountAscending,
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

  render() {
    return (
      <div>
        <SearchBar />
        <span>Name</span>
        <SortButtons
          onUpArrowClick={this.onSortByNameAscending}
          onDownArrowClick={this.onSortByNameDescending}
        />
        <span>Amount</span>
        <SortButtons
          onUpArrowClick={this.onSortByAmountAscending}
          onDownArrowClick={this.onSortByAmountDescending}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortByNameAscending: () => dispatch(sortByNameAscending()),
  sortByAmountAscending: () => dispatch(sortByAmountAscending()),
  sortByNameDescending: () => dispatch(sortByNameDescending()),
  sortByAmountDescending: () => dispatch(sortByAmountDescending()),
});

export default connect(null, mapDispatchToProps)(CoinsListFilter);
