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
    "duration" TIME
);


CREATE TABLE "exercise" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "type" VARCHAR (100),
    "exercise_duration" time,
    "workoutId"  integer REFERENCES "workout"
);

CREATE TABLE "workout_plan" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user",
    "dayOfWeek" VARCHAR (10),
    "workoutId" integer REFERENCES "workout",
    "isComplete" BOOLEAN default FALSE
);

INSERT INTO "workout" ("name", "duration") VALUES
('Morning Yoga', '00:30:00'),
('Evening Cardio', '00:45:00'),
('Strength Training', '01:00:00');

INSERT INTO "exercise" ("name", "type", "exercise_duration", "workoutId") VALUES
('Push Ups', 'Strength', '00:10:00', 1),
('Running', 'Cardio', '00:20:00', 2),
('Squats', 'Strength', '00:15:00', 3);

INSERT INTO "workout_plan" ("user_id", "dayOfWeek", "workoutId") VALUES
(1,'monday',1);

