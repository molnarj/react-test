import "babel-polyfill";
import React from 'react';
import { connect } from 'react-redux';
import rootSaga from '../sagas/AsyncTestSaga';
import Counter from './Counter';
import {increment, decrement, incrementAsync} from '../actions/AsyncTestPage';

class AsyncTestPage extends React.Component {
  constructor(props) {
    super(props);
  }
  inc = () => {
    this.props.dispatch(increment());
  };
  dec = () => {
    this.props.dispatch(decrement());
  };
  incAsync = () => {
    this.props.dispatch(incrementAsync());
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
