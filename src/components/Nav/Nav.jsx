import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/exercise">
        <h2 className="nav-title">FitnessFollower Project</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            
            <Link className="navLink" to="/workout">
              Workout
            </Link>

            <Link className="navLink" to="/exercise">
              Exercise
            </Link>

            <Link className="navLink" to="/workoutplan">
            WorkoutPlan
            </Link>

            <Link className="navLink" to="/about">
          About
        </Link>
           
          </>
        )}

        <LogOutButton className="navLink" to="/login"/>
      </div>
    </div>
  );
}

export default Nav;
