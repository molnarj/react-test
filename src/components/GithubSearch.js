import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from '../constants/GithubSearchConstants';
import { reposLoaded, repoLoadingError } from '../actions/GithubSearchActions';

import injectReducer from '../utils/injectReducer';
import injectSaga from '../utils/injectSaga';

import request from '../utils/request';
import { makeSelectUsername } from '../selectors/GithubSearchSelectors';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from '../selectors/Selectors';

import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import configureStore from '../store/configureStore';

import reducer from '../reducers/GithubSearch';
import saga from '../sagas/GithubSearchSaga';

const store = configureStore();

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    return (
      <Form onSubmit={this.props.onSubmitForm}>
        <label htmlFor="username">
          <FormattedMessage {...messages.trymeMessage} />
          <AtPrefix>
            <FormattedMessage {...messages.trymeAtPrefix} />
          </AtPrefix>
          <Input
            id="username"
            type="text"
            placeholder="mxstbr"
            value={this.props.username}
            onChange={this.props.onChangeUsername}
          />
        </label>
      </Form>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
