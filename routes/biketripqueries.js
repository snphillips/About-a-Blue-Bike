
const { Router } = require("express");
const pool = require("../config/connection");
const router = Router();


// GET all trips. Max 5 for now
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

// *********************************************************
// Many of the more SIMPLE QUERIES, in one place
// Not here: womancyclisttrips, mancyclisttrips,
// unknowngendercyclisttrips, topstation, topstationvisits
// *********************************************************
router.get("/simplequeries/:bikeid", (request, response, next) => {
  const { bikeid } = request.params;
  pool.query(
    `SELECT
      COUNT(bikeid) AS totaltrips,
      MIN (to_char(starttime, 'YYYY-MM-DD')) AS firstridedate,
      MIN (to_char(starttime, 'HH12:MM AM')) AS firstridetime,
      MAX (to_char(starttime, 'YYYY-MM-DD')) AS lastridedate,
      MAX (to_char(starttime, 'HH12:MM AM')) AS lastridetime,
      SUM(tripduration)/3600 AS totaltimeonroad,
      ROUND((SUM(tripduration)/3600)*7.456, 0) AS totaldistance,
      ROUND(AVG (tripduration/60), 1) AS avgtripdurationbyid,
      COUNT (DISTINCT startstationname) AS totalstations
      FROM citibike_rides
      WHERE bikeid = $1;`, [bikeid],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

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
// *********************************************************
// Picks a random bikeId
// Both queries work, however the second one is "less expensive" (faster)
router.get("/randombikeid", (request, response, next) => {
  pool.query(
    // "SELECT bikeid FROM citibike_rides ORDER BY random() LIMIT 1;",
    "SELECT bikeid FROM citibike_rides OFFSET floor(random()*7833430) LIMIT 1;",
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});
// *********************************************************

 // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 // Unused queries - not actively using
 // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/* Get all trip data by bikeid */
router.get("/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT * FROM citibike_rides WHERE bikeid = $1`,
  //   [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

// Get all unique bikeIds
// This is helpful to have, though we're not using at the moment
router.get("/uniquebikes", (request, response, next) => {
  // pool.query(
  //   "SELECT DISTINCT bikeid FROM citibike_rides ORDER BY bikeId ASC;",
  //   (err, res) => {
  //     if (err) return next(err);

  //     response.json(res.rows);
  //   }
  // );
});

router.get("/totalstations/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT COUNT (DISTINCT startstationname)
  //    AS totalstations
  //    FROM citibike_rides
  //    WHERE bikeid = $1;`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/totaltrips", (request, response, next) => {
  // pool.query(
  //   "SELECT COUNT (bikeid) AS totaltrips FROM citibike_rides;",
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/totaltrips/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT count(*)
  //   AS totaltrips
  //   FROM citibike_rides
  //   WHERE bikeid = $1`,
  //   [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/firstridedate/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT to_char(starttime, 'YYYY-MM-DD')
  //    AS firstridedate
  //    FROM citibike_rides
  //    WHERE bikeid = $1
  //    ORDER BY starttime ASC
  //    LIMIT 1`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/firstridetime/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT to_char(starttime, 'HH12:MM AM')
  //    AS firstridetime
  //    FROM citibike_rides
  //    WHERE bikeid = $1
  //    ORDER BY starttime ASC
  //    LIMIT 1`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/lastridedate/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT to_char(starttime, 'YYYY-MM-DD')
  //    AS lastridedate
  //    FROM citibike_rides
  //    WHERE bikeid = $1
  //    ORDER BY starttime DESC
  //    LIMIT 1`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/lastridetime/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT to_char(starttime, 'HH12:MM AM')
  //    AS lastridetime
  //    FROM citibike_rides
  //    WHERE bikeid = $1
  //    ORDER BY starttime DESC
  //    LIMIT 1`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/totaltime/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //  `SELECT SUM(tripduration)/3600
  //    AS totaltimeonroad
  //    FROM citibike_rides
  //    WHERE bikeid = $1;`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/totaldistance/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT ROUND((SUM(tripduration)/3600)*7.456, 0)
  //    AS totaldistance
  //    FROM citibike_rides
  //    WHERE bikeid = $1;`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

router.get("/avgtripdurationbyid/:bikeid", (request, response, next) => {
  // const { bikeid } = request.params;
  // pool.query(
  //   `SELECT ROUND(AVG (tripduration/60), 0)
  //    AS avgtripdurationbyid
  //    FROM citibike_rides
  //    WHERE bikeid = $1;`, [bikeid],
  //   (err, res) => {
  //     if (err) return next(err);
  //     response.json(res.rows);
  //   }
  // );
});

module.exports = router;



