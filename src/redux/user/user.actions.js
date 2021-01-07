export const setCurrentUser = (user) => {
  const action = {
    type: "SET_CURRENT_USER",
    payload: user,
  };

  return action;
};
