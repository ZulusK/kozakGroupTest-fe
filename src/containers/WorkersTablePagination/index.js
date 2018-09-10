import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectors as workersSelectors,
  actions as workersActions
} from '../../reducers/workers';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

class WorkersTablePagination extends Component {
  handlePageChange = ({ selected }) => {
    this.props.setCurrentPage(selected);
    this.props.onSetCurrentPage();
  };

  render() {
    return (
      <ReactPaginate
        pageCount={this.props.pageCount}
        pageRangeDisplayed={5}
        forcePage={this.props.currentPage}
        breakClassName="pagination-ellipsis"
        onPageChange={this.handlePageChange}
        initialPage={0}
        containerClassName="pagination is-centered"
        pageLinkClassName="pagination-link"
        activeClassName="pagination-link is-current"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
      />
    );
  }
}

const mapStateToProps = state => ({
  currentPage: workersSelectors.getCurrentPage(state),
  pageCount: workersSelectors.getPageCount(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(workersActions.setCurrentPage(page))
});

WorkersTablePagination.propTypes = {
  onSetCurrentPage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkersTablePagination);
