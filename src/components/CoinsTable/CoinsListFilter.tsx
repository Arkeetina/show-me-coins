import * as React from 'react';
import { connect } from 'react-redux';

import SortButtons from '../common/SortButtons.js';
import {
  sortByPriceUsdAscending,
  sortByPriceUsdDescending,
  sortByMarketCapAscending,
  sortByMarketCapDescending,
  sortByPerChangeAscending,
  sortByPerChangeDescending,
} from '../../actions/coinsFilters';

interface CoinsListFilterProps {
  sortByPriceUsdAscending: typeof sortByPriceUsdAscending,
  sortByPriceUsdDescending: typeof sortByPriceUsdDescending,
  sortByMarketCapAscending: typeof sortByMarketCapAscending,
  sortByMarketCapDescending: typeof sortByMarketCapDescending,
  sortByPerChangeAscending: typeof sortByPerChangeAscending,
  sortByPerChangeDescending: typeof sortByPerChangeDescending,
}

class CoinsListFilter extends React.Component<CoinsListFilterProps> {
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
            onUpArrowClick={this.onSortByPriceUsdDescending}
            onDownArrowClick={this.onSortByPriceUsdAscending}
          />
        </div>

        <div className="coin-table-head-cell">
          <span className="coin-table-head-text">Market Cap</span>
          <SortButtons
            onUpArrowClick={this.onSortByMarketCapDescending}
            onDownArrowClick={this.onSortByMarketCapAscending}
          />
        </div>

        <div className="coin-table-head-cell">
          <span className="coin-table-head-text">Change (24h)</span>
          <SortButtons
            onUpArrowClick={this.onSortByPerChangeDescending}
            onDownArrowClick={this.onSortByPerChangeAscending}
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


export default connect(null, mapDispatchToProps)(CoinsListFilter);
