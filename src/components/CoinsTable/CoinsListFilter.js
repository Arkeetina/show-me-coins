import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../common/SearchBar';
import SortButtons from '../common/SortButtons';
import {
  sortByNameAscending,
  sortByNameDescending,
  sortByPriceUsdAscending,
  sortByPriceUsdDescending,
  sortByMarketCapAscending,
  sortByMarketCapDescending,
  sortByPerChangeAscending,
  sortByPerChangeDescending,
} from '../../actions/coinsFilters';

class CoinsListFilter extends Component {
  // Name
  onSortByNameAscending = () => {
    this.props.sortByNameAscending();
  };

  onSortByNameDescending = () => {
    this.props.sortByNameDescending();
  };

  // Price
  onSortByPriceUsdAscending = () => {
    this.props.sortByPriceUsdAscending();
  };

  onSortByPriceUsdDescending = () => {
    this.props.sortByPriceUsdDescending();
  }
  

  // Market Cap
  onSortByMarketCapAscending = () => {
    this.props.sortByMarketCapAscending();
  };

  onSortByMarketCapDescending = () => {
    this.props.sortByMarketCapDescending();
  }

  // Percent Change
  onSortByPerChangeAscending = () => {
    this.props.sortByPerChangeAscending();
  };

  onSortByPerChangeDescending = () => {
    this.props.sortByPerChangeDescending();
  }

  render() {
    return (
      <div className="coin-table-head">
        <div className="coin-table-head-cell">
          <p className="coin-table-head-text">Name</p>
          <SortButtons
            onUpArrowClick={this.onSortByNameAscending}
            onDownArrowClick={this.onSortByNameDescending}
          />
        </div>
        <div className="coin-table-head-cell">
          <p className="coin-table-head-text">Price ($)</p>
          <SortButtons
            onUpArrowClick={this.onSortByPriceUsdAscending}
            onDownArrowClick={this.onSortByPriceUsdDescending}
          />
        </div>
        <div className="coin-table-head-cell">
          <p className="coin-table-head-text">Market Cap ($)</p>
          <SortButtons
            onUpArrowClick={this.onSortByMarketCapAscending}
            onDownArrowClick={this.onSortByMarketCapDescending}
          />
        </div>
        <div className="coin-table-head-cell">
          <p className="coin-table-head-text">Change (24h)</p>
          <SortButtons
            onUpArrowClick={this.onSortByPerChangeAscending}
            onDownArrowClick={this.onSortByPerChangeDescending}
          />
        </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortByNameAscending: () => dispatch(sortByNameAscending()),
  sortByNameDescending: () => dispatch(sortByNameDescending()),
  sortByPriceUsdAscending: () => dispatch(sortByPriceUsdAscending()),
  sortByPriceUsdDescending: () => dispatch(sortByPriceUsdDescending()),
  sortByMarketCapAscending: () => dispatch(sortByMarketCapAscending()),
  sortByMarketCapDescending: () => dispatch(sortByMarketCapDescending()),
  sortByPerChangeAscending: () => dispatch(sortByPerChangeAscending()),
  sortByPerChangeDescending: () => dispatch(sortByPerChangeDescending()),
});

export default connect(null, mapDispatchToProps)(CoinsListFilter);
