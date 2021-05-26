-- https://www.hackerrank.com/challenges/weather-observation-station-5

/*
Enter your query here.
*/
select CITY, LENGTH(CITY) from STATION ORDER BY LENGTH(CITY) DESC LIMIT 1;
select CITY, LENGTH(CITY) from STATION ORDER BY LENGTH(CITY) ASC, CITY LIMIT 1;
