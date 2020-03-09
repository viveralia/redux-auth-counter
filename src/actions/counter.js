export const increment = (step = 1) => {
  return {
    type: "INCREMENT",
    payload: step
  };
};

export const decrement = (step = 1) => {
  return {
    type: "DECREMENT",
    payload: step
  };
};
