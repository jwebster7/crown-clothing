import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  const action = {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };

  return action;
};
