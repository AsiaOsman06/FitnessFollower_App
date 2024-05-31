const workoutPlan = (state = [], action) => {
  switch (action.type) {
    case "SET_WORKOUT_PLANS":
      return action.payload;
    default:
      return state;
  }
};

export default workoutPlan;
