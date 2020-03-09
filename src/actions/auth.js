export const logIn = credentials => {
  return {
    type: "LOG_IN",
    payload: credentials
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT"
  };
};
