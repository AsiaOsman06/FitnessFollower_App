const exerciseReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_EXERCISES":
      // Sets the entire list of exercises
      return action.payload;
    // case "ADD_EXERCISE":
    //   // Adds a new exercise to the existing list
    //   return [...state, action.payload];
    // case "DELETE_EXERCISE_REQUEST":
    //   // Removes an exercise from the list by ID
    //   return state.filter((exercise) => exercise.id !== action.payload);
    // case "ADD_EXERCISE_FAILURE":
    //   // Optionally handle add failure (e.g., show an error message)
    //   console.error("Failed to add exercise:", action.error);
    //   return state;
    // case "DELETE_EXERCISE_FAILURE":
    //   // Optionally handle delete failure
    //   console.error("Failed to delete exercise:", action.error);
    //   return state;
    default:
      return state;
  }
};

export default exerciseReducer;
