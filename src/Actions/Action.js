export const increment = (num) => {
  return {
    type: "INCREMENT",
    increaseBy: num
  };
};
export const decrement = (num) => {
  return {
    type: "DECREMENT",
    decreaseBy: num
  };
};
