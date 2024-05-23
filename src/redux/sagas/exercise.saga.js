import { takeEvery, put } from "redux-saga/effects";
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
function* exerciseSaga() {
  yield takeEvery("FETCH_EXERCISES", fetchAllExercise);
}


  
    
export default exerciseSaga;
