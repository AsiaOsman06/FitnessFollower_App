-- DROP TABLE "user";
-- DROP TABLE "workout";
-- DROP TABLE "exercise";
-- DROP TABLE "workout_exercise";
-- DROP TABLE "scheduled_workout";


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "firstname" VARCHAR (60) ,
    "lastname" VARCHAR (80) 
);

CREATE TABLE "workout" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "duration" TIME,
    "date" DATE,
    "user_id" INTEGER REFERENCES "user"
);


CREATE TABLE "exercise" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "type" VARCHAR (100),
    "exercise_duration" time
);

CREATE TABLE "workout_exercise" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user",
     "workoutID" integer REFERENCES workout,
     "time_spend" integer,
     "isComplete" boolean default false,
     "name" varchar (100),
     "no_exercises" integer ,
     "date_completed" date 
);


CREATE TABLE "scheduled_workout" (
    "id" SERIAL PRIMARY KEY,
    "exerciseID" integer REFERENCES exercise,
     "workoutID" integer REFERENCES workout
);
 


INSERT INTO "workout" ("name", "duration", "date", "user_id") VALUES
('Morning Yoga', '00:30:00', '2024-05-20', 1),
('Evening Cardio', '00:45:00', '2024-05-19', 2),
('Strength Training', '01:00:00', '2024-05-18', 3);

INSERT INTO "exercise" ("name", "type", "exercise_duration") VALUES
('Push Ups', 'Strength', '00:10:00'),
('Running', 'Cardio', '00:20:00'),
('Squats', 'Strength', '00:15:00');

INSERT INTO "workout_exercise" ("user_id", "workoutID", "time_spend", "isComplete", "name", "no_exercises", "date_completed") VALUES
(1, 1, 20, TRUE, 'Morning Workout', 10, '2024-05-20'),
(2, 2, 45, TRUE, 'Cardio Session', 5, '2024-05-19'),
(3, 3, 60, FALSE, 'Strength Routine', 8, '2024-05-18');

INSERT INTO "scheduled_workout" ("exerciseID", "workoutID") VALUES
(1, 1),
(2, 2),
(3, 3);



