const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const query = `
    SELECT * FROM "workout";
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all workout", err);
      res.sendStatus(500);
    });
});

router.get("/workoutPlan/:id", (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT * FROM "workout_plan" 
    JOIN "workout" ON "workoutId"="workout"."id" WHERE "user_id" = $1;
  `;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get workout plan by id", err);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post("/workoutPlan", (req, res) => {
  console.log("Breakdown", req.body);
  // POST route code here
  const id = req.body.userId;
  const day = req.body.dayOfWeek;
  const workoutId = req.body.workoutId;
  const query = `INSERT INTO "workout_plan" ("user_id", "dayOfWeek", "workoutId") VALUES
  ($1, $2, $3);`;
  pool
    .query(query, [id, day, workoutId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Post workout plan by id", err);
      res.sendStatus(500);
    });
});



router.delete("/workoutPlan/workoutId", (req, res) => {
  // POST route code here
  const id = req.params.id;
  const query = `DELETE FROM "workout_plan" WHERE "workoutId" = $1;`;
  console.log("QUERY: ", query);
  console.log("ID: ", id);

  pool
    .query(query, [workoutId])
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log("ERROR: Delete workout plan by id", err);
      res.sendStatus(500);
    });
});

// router.put("/workoutPlan/:id", (req, res) => {
//   // POST route code here
//   const id = req.params.id;
//   const isComplete = req.body.isComplete;
//   const query = `UPDATE "workout_plan" SET "isComplete" = $1 WHERE "id" = $2;`;
//   pool
//     .query(query, [isComplete, id])
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log("ERROR: Put workout plan by id", err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
