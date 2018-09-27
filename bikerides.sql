-- Good reminder about working with postgresql here:
-- https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

-- ================================================
-- PREPARING the DATA for ABOUTABLUEBIKE
-- ================================================
-- 1) Check spelling of your file name. What about hypens & underscores?
-- 2) Check number of columns. Do they add up to your CREATE TABLE list? Should be 15.
-- 3) Check column names....do they match your CREATE TABLE list?
-- 4) Check that you are not importing the header row in your csv (include CSV HEADER in your \c path)
-- 5) Check that column types are okay (integer vs. varchar etc.).
--   This may take a couple tries. For instance, if integer, set to number and remove the decimals.
--   Specifically- the tripduration column, must be number and set to No zeros.


-- ================================================
-- HOW TO SEED DATABASE:
-- ================================================
--   In the terminal:
-- 1) To start postgres (assuming it is installed) type psql
-- 2) To view the databases, type \list
-- 3) To connect to the db in question, \connect or \c bluebikedb
-- 4) If it's not there, to create a new database, type CREATE DATABASE bluebikedb;
-- 5) To ensure that database got created, type \list
-- 6) To view the database tables (if there are any), type \dt

-- 7) THE EASY WAY: execute this file by typing in the command line:
-- $ psql
--   \i bikerides.sql

-- THE HARD WAY:
-- 7) Start fresh by droppin current table:
DROP TABLE citibike_rides;

-- 8)
CREATE TABLE citibike_rides (
  tripduration INTEGER,
  starttime TIMESTAMP,
  stoptime TIMESTAMP,
  startstationid INTEGER,
  startstationname VARCHAR,
  startstationlatitude NUMERIC,
  startstationlongitude NUMERIC,
  endstationid INTEGER,
  endstationname VARCHAR,
  endstationlatitude NUMERIC,
  endstationlongitude NUMERIC,
  bikeid NUMERIC,
  usertype VARCHAR,
  birthyear VARCHAR,
  gender INTEGER
  );
-- 9) To view the database tables, you created type \dt
-- 10)


\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201801-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201802-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201803-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201804-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201805-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201806-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

-- \copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201807-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

-- \copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/201808-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201801-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201802-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201803-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201804-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201805-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

\copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201806-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

-- \copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201807-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;

-- \copy citibike_rides (tripduration,starttime,stoptime,startstationid,startstationname,startstationlatitude,startstationlongitude,endstationid,endstationname,endstationlatitude,endstationlongitude,bikeid, usertype,birthyear,gender) FROM '/Users/snphillips/1webdev/aboutabluebikereact-ancillary/citibike_data_2018/JC-201808-citibike-tripdata.csv' DELIMITER ',' CSV HEADER;


-- 11) To view some rows (to ensure import was a success) type SELECT * FROM citibike_rides LIMIT 10;
-- 12) You'll need to index the db otherwise retrieval will be slow:
DELETE FROM citibike_rides
WHERE endstationname = 'NYCBS Depot BAL - DYR'
OR endstationname = 'NYCBS Depot BAL - PIT'
OR endstationname = 'NYCBS Depot BAL - DELANCEY'
OR endstationname = 'NYCBS DEPOT - DELANCEY'
OR endstationname = 'NYCBS Depot BAL - RIS'
OR endstationname = 'NYCBS Depot BAL - GOW'
OR endstationname = 'NYCBS Depot - GOW'
OR endstationname = 'NYCBS Depot BAL - STY - Garage 4'
OR endstationname = 'NYCBS Depot 3AV'
OR endstationname = 'JCBS Depot'
OR endstationname = '8D QC Station 01'
OR endstationname = 'Apache'
OR endstationname = 'GOW Tech Shop'
OR endstationname = 'Prototype Lab Motivate Headquarters'
or tripduration > 86400 -- remove trips more than 24hrs. 1751 rows
OR (startstationname = endstationname AND tripduration < 90); --less than 1.5 mins
-- This deletes 12,985 rows

CREATE INDEX index ON citibike_rides (bikeid);








