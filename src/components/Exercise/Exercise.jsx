import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Exercise.css";

function Exercise() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  
  const exercises = useSelector((store) => store.exercise);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_EXERCISES",
    });
  }, [dispatch]);

  const addExercise = () => {
    console.log('Adding exercise:', { name, type, exercise_duration: duration });
    dispatch({
      type: "ADD_EXERCISE",
      payload: { name, type, exercise_duration: duration }
    });
    setName('');
    setType('');
    setDuration('');
  };

  const deleteExercise = (id) => {
    console.log('Deleting exercise ID:', id);
    dispatch({
      type: "DELETE_EXERCISE_REQUEST",
      payload: id
    });
  };

  return (
    <div>
      <h1> My Exercises </h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (min)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={addExercise}>Add Exercise</button>
      </div>
      <table>
        <thead>
          <tr >
            <th>Name</th>
            <th>Type</th>
            <th>Exercise Duration</th>
            <th>Actions</th>  {/* Added a header for Actions */}
          </tr>
        </thead>
        {exercises.map((exercise) => (
          <tbody key={exercise.id}>
            <tr>
              <td>{exercise.name}</td>
              <td>{exercise.type}</td>
              <td>{exercise.exercise_duration}</td>
              <td>
                <button onClick={() => deleteExercise(exercise.id)}>Delete</button>  {/* Delete button */}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Exercise;
