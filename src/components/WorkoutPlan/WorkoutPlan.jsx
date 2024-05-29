import React, {useState} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function WorkoutPlan() {
  const user = useSelector((store) => store.user);
  const workouts_plan = useSelector((store) => store.workoutPlan);

  const dispatch = useDispatch();  
  const availableWorkouts = useSelector((store) => store.workout);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (user.id) { // Ensure user.id is available before dispatching
      console.log("Fetching workouts for user ", user.id);
      dispatch({
        type: 'FETCH_WORKOUT_PLANS', 
        payload: user.id
      });
    }
  }, [user.id]);
  

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const days = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };
  const handleAddWorkout = () => {
    const workoutToAdd = {
      userId: user.id,
      dayOfWeek: selectedDay,
      workoutId: selectedWorkout
    };
    dispatch({ type: 'ADD_WORKOUT', payload: workoutToAdd });
    dispatch({ type: 'FETCH_WORKOUT_PLANS', payload: user.id }); // Refetch or ensure your ADD_WORKOUT updates the state correctly
    history.replace("/workoutplan");
  };

  const deleteWorkoutPlan = (id) => {
    console.log('Deleting workout plan ID:', id);
    dispatch({
      type: "DELETE_WORKOUTPLAN",
      payload: id
    });
    // history.replace('/workoutplan')
  };

  // Populate the days object with workouts based on the day of the week
  workouts_plan.forEach(workout => {
    const dayKey = workout.dayOfWeek.toLowerCase(); // Convert to lowercase to handle case insensitivity
    if (days[dayKey]) {
      days[dayKey].push(workout);
    }
  });
  return (
    <div>
      <h1>Workout Plan</h1>
      <div>
      <select value={selectedWorkout} onChange={(e) => setSelectedWorkout(e.target.value)}>
  <option value="">Select Workout</option>
  {availableWorkouts.map(workout => (

 
 
    <option key={workout.id} value={workout.id}>{workout.name}</option>
  ))}
  console.log(' test',availableWorkouts);
</select>

        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          <option value="">Select Day</option>
          {daysOfWeek.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <button onClick={handleAddWorkout}>Add Workout</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(days).map((dayWorkouts, index) => (
              <td key={index}>
                {dayWorkouts.map((workout, index) => (
                  <div key={index}>{workout.name}
                  <button onClick={() => deleteWorkoutPlan(workout.id)}>Delete</button>
                  </div>
                  
                  
                ))}             
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutPlan;
