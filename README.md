# About a Blue Bike

**NOTE I RECENTLY DISCONNECTED THE DATABASE TO SAVE ON HOSTING FEES-- THE APP DOES NOT WORK RIGHT NOW**

_About a Blue Bike_ is a tool to look up statistics on individual bicycles in New York City's Citibike bike share system. 

Every Citibike has a unique identification number. Users of _About a Blue Bike_ input a bike id into a field and are presented with a narrative that includes the length of time that bike has been on the road, how many miles the bike had travelled and which docking stations it has visited.

View the website here: https://aboutabluebike.surge.sh/

**NOTE I RECENTLY DISCONNECTED THE DATABASE TO SAVE ON HOSTING FEES-- THE APP WILL NOT WORK RIGHT NOW**

<img src="https://i.imgur.com/A1J5MxP.jpg" width="500" alt="screengrab of app">

## Background Research
Many researchers and students have mined citibike data to create interesting projects:
- https://nycdatascience.com/blog/student-works/citi-bike-riders-in-different-ages-the-potential-of-target-advertising/
- http://toddwschneider.com/posts/a-tale-of-twenty-two-million-citi-bikes-analyzing-the-nyc-bike-share-system/
- https://carto.com/blog/citibike-analysis/
- https://www.authorea.com/users/106016/articles/134373-citi-bike-riders-exploratory-analysis/_show_article
- https://bigquery.cloud.google.com/dataset/bigquery-public-data:new_york

## Wireframes
- 04/18/18 https://i.imgur.com/ojdaOrb.jpg
- 04/18/18 https://i.imgur.com/pJACpvk.jpg
- 04/19/18 https://i.imgur.com/l4aKkrO.jpg

## Approach taken
Citibike publishes a monthly report in the form of a csv file that breaks down every ride. I downloaded all the cvs files, sanitized the data, then created a database with all ride statistics. I then created SQL queries to pull the information I am interested in displaying.

I created a simple, clean user-friendly interface so that users feel welcome and intuitively know how to use the app. I tried to complement the CitiBike colors, without copying them outright. I wanted the app to have a visual link to Citi Bike without being free advertising for CitiBank.

## Feature List
- A homepage that describes what the app does
- A form that allows users to input bike identification numbers
- A results page that displays the data

## Built With
- Node/Express
- React
- Axios for API calls
- client hosted with Heroku
- server hosted with Surge

## Change Log
-To avoid excessive hosting fees, I had to limit my table to contain 2018 data instead of the entire time CitiBike has been active. My current Heroku plan allows me to have 10, 000 000 lines.

## To Do
- Add generated map of stations bike has visited. Mapbox? 
