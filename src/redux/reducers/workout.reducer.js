const workoutReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default workoutReducer;
