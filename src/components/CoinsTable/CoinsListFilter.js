import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SortButtons from '../common/SortButtons';
import {
  sortByPriceUsdAscending,
  sortByPriceUsdDescending,
  sortByMarketCapAscending,
  sortByMarketCapDescending,
  sortByPerChangeAscending,
  sortByPerChangeDescending,
} from '../../actions/coinsFilters';

class CoinsListFilter extends Component {
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
          <span className="coin-table-head-text">Name</span>
        </div>

        <div className="coin-table-head-cell">
          <span className="coin-table-head-text">Price</span>
          <SortButtons
            onUpArrowClick={this.onSortByPriceUsdAscending}
            onDownArrowClick={this.onSortByPriceUsdDescending}
          />
        </div>

        <div className="coin-table-head-cell">
          <span className="coin-table-head-text">Market Cap</span>
          <SortButtons
            onUpArrowClick={this.onSortByMarketCapAscending}
            onDownArrowClick={this.onSortByMarketCapDescending}
          />
        </div>

        <div className="coin-table-head-cell">
          <span className="coin-table-head-text">Change (24h)</span>
          <SortButtons
            onUpArrowClick={this.onSortByPerChangeAscending}
            onDownArrowClick={this.onSortByPerChangeDescending}
          />
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sortByPriceUsdAscending: () => dispatch(sortByPriceUsdAscending()),
  sortByPriceUsdDescending: () => dispatch(sortByPriceUsdDescending()),
  sortByMarketCapAscending: () => dispatch(sortByMarketCapAscending()),
  sortByMarketCapDescending: () => dispatch(sortByMarketCapDescending()),
  sortByPerChangeAscending: () => dispatch(sortByPerChangeAscending()),
  sortByPerChangeDescending: () => dispatch(sortByPerChangeDescending()),
});

CoinsListFilter.propTypes = {
  sortByPriceUsdAscending: PropTypes.func.isRequired,
  sortByPriceUsdDescending: PropTypes.func.isRequired,
  sortByMarketCapAscending: PropTypes.func.isRequired,
  sortByMarketCapDescending: PropTypes.func.isRequired,
  sortByPerChangeAscending: PropTypes.func.isRequired,
  sortByPerChangeDescending: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CoinsListFilter);
