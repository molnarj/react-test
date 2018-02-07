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
    this.props.dispatch({ type: 'INCREMENT' });
  };
  dec = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };
  incAsync = () => {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' });
  }
  render() {
    return (
      <div>
        <h1>Async test page</h1>
        <p>Counter</p>

        <Counter
          value={this.props.counter.count}
          onIncrement={this.inc}
          onDecrement={this.dec}
          onIncrementAsync={this.incAsync}
        />
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
