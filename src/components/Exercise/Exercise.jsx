import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Exercise.css';

function Exercise() {
  const exercise = useSelector((store) => store.exercise);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_EXERCISES",
    });
  }, []);

  return (
    <div>
      <h1> My Exercises </h1>
      {/* {JSON.stringify(exercise)} */}
      <table>  
        <thead>
         <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Exercise Duration</th>
         </tr>
         </thead>
      {exercise.map((exercises) => {
        return (
<       tbody>
         <tr>
            <td>{exercises.name}</td>
            <td>{exercises.type}</td>
            <td>{exercises.exercise_duration}</td>
         </tr>
         </tbody>
            
        );
      })}
      </table>
   </div>
  );
}
export default Exercise;
