import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetAction
} from "actions/counterAction";

class CounterPage extends Component {
  render() {
    const { counter, increment, decrement, reset, logins } = this.props;
    const { username } = logins.user || "";
    return (
      <div className="App">
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
        <div>{username}</div>
        <div>{counter}</div>
        <div>
          <button onClick={increment}>INCREMENT BY 1</button>
        </div>
        <div>
          <button onClick={decrement}>DECREMENT BY 1</button>
        </div>
        <button onClick={reset}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("counter " + state);
  return {
    counter: state.c,
    logins: state.logins
  };
};
const actionCreater = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
    reset: () => dispatch(resetAction())
  };
};
export default connect(mapStateToProps, actionCreater)(CounterPage);
