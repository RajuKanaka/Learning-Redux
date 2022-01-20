const initailvalue = 0;

const IncDec = (state = initailvalue, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + actions.increaseBy;
    case "DECREMENT":
      return state - actions.decreaseBy;
    default:
      return state;
  }
};

export default IncDec;
