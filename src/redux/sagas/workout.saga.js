import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchAllWorkouts() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const workout = yield axios.get("/api/workout", config);
    console.log("get all:", workout);
    yield put({
      type: "SET_WORKOUTS",
      payload: workout.data,
    });
  } catch (error) {
    console.log("error:", error);
  }
}
function* workoutSaga() {
  yield takeEvery("FETCH_WORKOUTS", fetchAllWorkouts);
}

export default workoutSaga;
