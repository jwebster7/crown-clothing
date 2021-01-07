// a reducer is a function that takes a state and an action as arguments.
// the action contains a type and a payload?.
import { UserActionTypes } from "./user.types";

// default initial state of null
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
