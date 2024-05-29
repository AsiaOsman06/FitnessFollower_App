const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const query = `
    SELECT * FROM "exercise";
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all exercises", err);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post("/", (req, res) => {

  // POST route code here
  const name = req.body.name;
  const type = req.body.type;
  const exercise_duration = req.body.exercise_duration;
  const workoutId = req.body.workoutId;
  const query = `INSERT INTO "exercise" ("name", "type", "exercise_duration","workoutId") VALUES
  ($1, $2, $3,$4);`;
  pool
    .query(query, [name, type, exercise_duration, workoutId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Post exercise by id", err);
      res.sendStatus(500);
    });
});
router.delete("/:id", (req, res) => {
  // POST route code here
  const id = req.params.id;
  const query = `DELETE FROM "exercise" WHERE "id" = $1;`;
  console.log("QUERY: ", query);
  console.log("ID: ", id);

  pool
    .query(query, [id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("ERROR: Delete workout plan by id", err);
      res.sendStatus(500);
    });
});

module.exports = router;
