import "babel-polyfill";
import React from 'react';
import { connect } from 'react-redux';
import rootSaga from '../sagas/AsyncTestSaga';
import Counter from './Counter';
import {increment, decrement, incrementAsync} from '../actions/AsyncTestPage';
import { getUser, postPost } from "../actions/API";

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
  getUserAsync = () => {
    this.props.dispatch(getUser(2));
  }
  postPostAsync = () => {
    const timeStamp = new Date().getTime();
    const title = 'title_' + timeStamp;
    const body = 'body_' + timeStamp;
    this.props.dispatch(postPost(1, title, body));
  }

  render() {
    return (
      <div>
        <h1>Async test page</h1>

        <p>API CALL TEST:</p>
        <button onClick={this.getUserAsync}>GET</button>
        <button onClick={this.postPostAsync}>POST</button>
        <br />
        <br />
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
