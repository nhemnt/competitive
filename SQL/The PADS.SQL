-- https://www.hackerrank.com/challenges/the-pads/problem

SELECT CONCAT(Name,'(',LEFT(Occupation, 1),')') from OCCUPATIONS ORDER BY Name;
SELECT "There are a total of" , COUNT(*) totalCount, CONCAT(lower(Occupation), 's.') FROM OCCUPATIONS GROUP BY Occupation ORDER BY Count(Name), Occupation;