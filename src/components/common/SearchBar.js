import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/coinsFilters'

class SearchBar extends Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  

  render() {
    return (
      <div className="input-group__item">
        <input
          type="text"
          className="text-input"
          placeholder="Search Coins"
          value={this.props.coinsFilters.text}
          onChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coinsFilters: state.coinsFilters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
