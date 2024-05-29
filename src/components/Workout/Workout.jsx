import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./Exercise.css";

function Workout() {
  const workouts = useSelector((store) => store.workout);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_WORKOUTS"
    });
  }, []);

  return (
    
    <div>
      <h1> My Workouts </h1>
  
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        {workouts.map((workout) => {
          return (
            
            <tbody key={workout.id}>
              <tr >
                <td>{workout.name}</td>
                <td>{workout.duration}</td>
              </tr>
            </tbody>
          );
        })
        }
      </table>
    </div>
  );
}
export default Workout;
