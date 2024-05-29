import { takeEvery, put, all, call
 } from "redux-saga/effects";
import axios from "axios";


function* fetchAllExercise() {
  try {
      const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const exercise = yield axios.get("/api/exercise", config);
    console.log("get all:", exercise);
    yield put({
      type: "SET_EXERCISES",
      payload: exercise.data,
    });
  } catch (error) {
    console.log("error:", error);
  }
}

function* addExercise(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.post("/api/exercise", action.payload, config);
    yield put({ type: "ADD_EXERCISE", payload: response.data });
  } catch (error) {
    console.log("Error adding exercise:", error);
    yield put({ type: "ADD_EXERCISE_FAILURE", error });
  }
}

function* deleteExercise(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.delete(`/api/exercise/${action.payload}`, config);

  } catch (error) {
    console.log("Error deleting exercise:", error);

  }
}


function* exerciseSaga() {
  yield takeEvery("FETCH_EXERCISES", fetchAllExercise);
  yield takeEvery("ADD_EXERCISE", addExercise);
 yield takeEvery("DELETE_EXERCISE_REQUEST", deleteExercise);


}

  
    
export default exerciseSaga;
