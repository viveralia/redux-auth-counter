const authReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      if (action.payload.user === "user" && action.payload.password === "123") {
        return true;
      }
      return false;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
};

export default authReducer;
