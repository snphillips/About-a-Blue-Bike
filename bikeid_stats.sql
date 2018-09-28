

-- This is where I create the table of the resulting queries.
-- Instead of loading the whole, huge database into Heroku (> 7 million lines)
-- the idea is only to load in the query results (13k lines)

-- TODO: figure out how to run this will all 13K+ bikeids
\set $1

DROP TABLE bikeid_stats

-- All queries except for top station visited.
-- Error message: "subquery must return only one column."
-- And I need the column COUNT in addition to startstationname
CREATE TABLE bikeid_stats AS
  SELECT
   (SELECT COUNT(*) FROM citibike_rides WHERE bikeid = $1) AS totaltrips,
   (SELECT COUNT (gender) FROM citibike_rides WHERE bikeid = $1 AND gender = 2) AS womancyclisttrips,
   (SELECT COUNT (gender) FROM citibike_rides WHERE bikeid = $1 AND gender = 1) AS mancyclisttrips,
   (SELECT COUNT (gender) FROM citibike_rides WHERE bikeid = $1 AND gender = 0) AS unknowngendercyclisttrips,
   (SELECT to_char(starttime, 'YYYY-MM-DD') FROM citibike_rides WHERE bikeid = $1 ORDER BY starttime ASC LIMIT 1) AS firstridedate,
   (SELECT to_char(starttime, 'HH12:MM AM') FROM citibike_rides WHERE bikeid = $1 ORDER BY starttime ASC LIMIT 1) AS firstridetime,
   (SELECT to_char(starttime, 'YYYY-MM-DD') FROM citibike_rides WHERE bikeid = $1 ORDER BY starttime DESC LIMIT 1) AS lastridedate,
   (SELECT to_char(starttime, 'HH12:MM AM') FROM citibike_rides WHERE bikeid = $1 ORDER BY starttime DESC LIMIT 1) AS lastridetime,
   (SELECT SUM(tripduration)/3600 FROM citibike_rides WHERE bikeid = $1) AS totaltimeonroad,
   (SELECT ROUND((SUM(tripduration)/3600)*7.456, 0) FROM citibike_rides WHERE bikeid = $1) AS totaldistance,
   (SELECT ROUND(AVG (tripduration/60), 0) FROM citibike_rides WHERE bikeid = $1) AS avgtripdurationbyid,
   (SELECT COUNT (DISTINCT startstationname) FROM citibike_rides WHERE bikeid = $1) AS totalstations,
   (SELECT COUNT (startstationname) FROM citibike_rides WHERE bikeid = $1 GROUP BY startstationname ORDER BY COUNT DESC LIMIT 1) AS topstationvisits;


