import React from 'react';
import { connect } from 'react-redux';
import {
  increment,
} from '../../store/actions';


const counter = (props) => {
  console.log('render', props);

  return (
    <div>
      <h1>I'm a counter!</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>increment</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => { dispatch(increment()) },
    // increment: () => {
    //   console.log('increment');
    //   const action = { type: 'INCREMENT' }
    //   dispatch(action);
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);