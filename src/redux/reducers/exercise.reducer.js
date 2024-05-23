const exerciseReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_EXERCISES":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default exerciseReducer;
