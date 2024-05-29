const workoutPlan = (state = [], action) => {
  switch (action.type) {
    case "SET_WORKOUT_PLANS":
      return action.payload;
    // case "DELETE_WORKOUTPLAN":
    //   // Removes an exercise from the list by ID
    //   return state.filter(
    //     (workoutPlan) => workoutPlan.workoutId !== action.payload
    //   );
    default:
      return state;
  }
};

export default workoutPlan;
