import "babel-polyfill";
import React from 'react';
import { connect } from 'react-redux';
import rootSaga from '../sagas/AsyncTestSaga';
import Counter from './Counter';
import {increment, decrement, incrementAsync} from '../actions/AsyncTestPage';
import { getUser } from "../actions/API";

class AsyncTestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId : props.userId || 1
    };
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
  getUserAsync = (event) => {
    event.preventDefault();
    this.props.dispatch(getUser(this.state.userId));
  }

  onIdChange = (e) => {
    const userId = e.target.value;
    this.setState(() => ({ userId }));
  };

  render() {
    return (
      <div>
        <h1>Async test page</h1>

        <p>API CALL TEST:</p>
        <form onSubmit={this.getUserAsync}>
        <input
          type="number"
          value={this.state.userId}
          onChange={this.onIdChange}
        />
        <button>GET</button>
        </form>
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
