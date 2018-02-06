import "babel-polyfill"

import React from 'react';
import { connect } from 'react-redux';
//--
// saga
// import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/AsyncTestSaga';
import Counter from './Counter';
//--

// const action = type => store.dispatch({type})
// const sagaMiddleware = createSagaMiddleware()

class AsyncTestPage extends React.Component {
  constructor(props) {
    super(props);
  }
  inc = () => {
    this.props.dispatch('INCREMENT');
  };
  dec = () => {
    this.props.dispatch('DECREMENT');
  };
  async = () => {
    this.props.dispatch('DECREMENT');
  }
  render() {
    return (
      <div>
        <h1>Async test page</h1>
        <p>Counter</p>

        <Counter
          value={this.props.counter.count}
          onIncrement={this.inc}
          onDecrement={this.dec} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(AsyncTestPage);
