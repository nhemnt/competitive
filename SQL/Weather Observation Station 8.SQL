-- https://www.hackerrank.com/challenges/weather-observation-station-8/

SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP "^[aeiou].*[aeiou]$";