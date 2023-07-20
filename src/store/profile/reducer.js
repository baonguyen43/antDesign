import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  isLoading: false,
  profile: {},
};

// const [count, setCount] = React.useState(0)

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SAVING_MY_PROFILE:
      return { ...state, profile: action.payload };

    case ActionTypes.GET_MY_PROFILE:
      return { ...state, isLoading: true };

    case ActionTypes.GET_MY_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, isLoading: false };

    case ActionTypes.GET_MY_PROFILE_FAILED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default profileReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
