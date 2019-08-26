import {
  INCREMENT,
} from './constants';

const INITIAL_STATE = {
  count: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    // return {
    //   ...state,
    //   ...{
    //     count: state.count + 1
    //   },
    // }
    default:
      return state;
  }
}

export default reducer;