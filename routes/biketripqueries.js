const { Router } = require("express");
// const express = require("express");
// const pool = require("../db");
const pool = require("../config/connection");
// const router = express.Router();
const router = Router();



/* GET all trips. Max 5 for now */
router.get("/", (request, response, next) => {
  pool.query(
    "SELECT * FROM citibike_rides ORDER BY bikeid ASC LIMIT 5;",
    (err, res) => {
     console.log(err)
      if (err) return next(err);

      response.json(res.rows);
    }
  );
});

// Get all unique bikeIds
router.get("/uniquebikes", (request, response, next) => {
  pool.query(
    "SELECT DISTINCT bikeId FROM citibike_rides ORDER BY bikeId ASC;",
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  );
});

/* Get all trip data by bikeid - works. Try 14529 19651 21678 29822 */
router.get("/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;

  pool.query(
    `SELECT * FROM citibike_rides WHERE bikeid = $1`,
    [bikeid],
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  );
});

// Total trip number - works
router.get("/totaltrips", (request, response, next) => {
  pool.query(
    "SELECT COUNT (bikeid) AS totaltrips FROM citibike_rides;",
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});


// Total trips by ID - works
router.get("/totaltrips/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT count(*)
    AS totaltrips
    FROM citibike_rides
    WHERE bikeid = $1`,
    [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});


// Women Cyclists total DOES NOT WORK (query works in psql)
// Error 22P02 "invalid_text_representation"
router.get("/womancyclisttrips", (request, response, next) => {
  pool.query(
    `SELECT COUNT (gender)
    AS womancyclisttrips
    FROM citibike_rides
    WHERE gender = 2;`,
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// Woman Cyclists, works
router.get("/womancyclisttrips/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT COUNT (gender)
     AS womancyclisttrips
     FROM citibike_rides
     WHERE gender = 2
     AND bikeid = $1`,
    [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// Man Cyclists, works
router.get("/mancyclisttrips/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT COUNT (gender)
     AS mancyclisttrips
     FROM citibike_rides
     WHERE gender = 1
     AND bikeid = $1`,
    [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// Unknown Gender Cyclists, works
router.get("/unknowngendercyclisttrips/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT COUNT (gender)
     AS unknowngendercyclisttrips
     FROM citibike_rides
     WHERE gender = 0
     AND bikeid = $1`,
    [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// works
router.get("/firstridedate/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT to_char(starttime, 'YYYY-MM-DD')
     AS firstridedate
     FROM citibike_rides
     WHERE bikeid = $1
     ORDER BY starttime ASC
     LIMIT 1`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// works
router.get("/firstridetime/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT to_char(starttime, 'HH12:MM AM')
     AS firstridetime
     FROM citibike_rides
     WHERE bikeid = $1
     ORDER BY starttime ASC
     LIMIT 1`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});


// works
router.get("/lastridedate/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT to_char(starttime, 'YYYY-MM-DD')
     AS lastridedate
     FROM citibike_rides
     WHERE bikeid = $1
     ORDER BY starttime DESC
     LIMIT 1`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// works
router.get("/lastridetime/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT to_char(starttime, 'HH12:MM AM')
     AS lastridetime
     FROM citibike_rides
     WHERE bikeid = $1
     ORDER BY starttime DESC
     LIMIT 1`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});
// works
router.get("/totaltime/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
   `SELECT SUM(tripduration)/3600
     AS totaltimeonroad
     FROM citibike_rides
     WHERE bikeid = $1;`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

router.get("/totaldistance/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT ROUND((SUM(tripduration)/3600)*7.456, 0)
     AS totaldistance
     FROM citibike_rides
     WHERE bikeid = $1;`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

router.get("/avgtripdurationbyid/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT ROUND(AVG (tripduration/60), 0)
     AS avgtripdurationbyid
     FROM citibike_rides
     WHERE bikeid = $1;`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // Does not work. Perhaps api call timing out?
// router.get("/avgtripduration", (request, response, next) => {
//   const { bikeid } = request.params;
//   pool.query(
//     `SELECT ROUND(AVG (tripduration/60), 0)
//      AS avgtripduration
//      FROM citibike_rides;`,
//     (err, res) => {
//       if (err) return next(err);
//       response.json(res.rows);
//     }
//   );
// });


// works
router.get("/totalstations/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT COUNT (DISTINCT startstationname)
     AS totalstations
     FROM citibike_rides
     WHERE bikeid = $1;`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// works
router.get("/topstation/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT startstationname, COUNT (startstationname)
     FROM citibike_rides
     WHERE bikeid = $1
     GROUP BY startstationname
     ORDER BY count DESC
     LIMIT 1;`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

module.exports = router;
