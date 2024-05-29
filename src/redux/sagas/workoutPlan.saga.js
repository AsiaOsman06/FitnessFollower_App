import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchWorkoutPlans(action) {
  try {
    console.log("in saga, ", action)
    const workoutPlan = yield axios.get(`/api/workout/workoutPlan`);
    console.log("get plan:", workoutPlan.data);
    yield put({
      type: "SET_WORKOUT_PLANS",
      payload: workoutPlan.data
    });
  } catch (error) {
    console.log("error:", error);
  }
}

function* postWorkoutPlan(action) {
  try {
    console.log("in saga, ", action);
    const workoutPlan = yield axios.post('/api/workout/workoutPlan',action.payload);

    console.log("get plan:", workoutPlan.data);

  } catch (error) {
    console.log("error:", error);
  }
}

function* deleteWorkPlan(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    console.log(action.payload)
    yield axios.delete(`/api/workout/workoutPlan/${action.payload}`, config);
    yield put({type: 'FETCH_WORKOUT_PLANS'})
  } catch (error) {
    console.log("Error deleting exercise:", error);
  }
}



function* updateWorkPlan(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    console.log(action.payload);
    yield axios.put(`/api/workout/workoutPlan/${action.payload}`, config);
    yield put({ type: "FETCH_WORKOUT_PLANS" });
  } catch (error) {
    console.log("Error update workoutplan:", error);
  }
}
function* workoutPlanSaga() {
  yield takeEvery("FETCH_WORKOUT_PLANS", fetchWorkoutPlans);
  yield takeEvery("ADD_WORKOUT", postWorkoutPlan);
  yield takeEvery("DELETE_WORKOUTPLAN", deleteWorkPlan);
   yield takeEvery("UPDATE_WORKOUTPLAN", updateWorkPlan);

}

export default workoutPlanSaga;
