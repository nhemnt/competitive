-- https://www.hackerrank.com/challenges/the-blunder/problem

select CEIL(AVG(Salary) - AVG(REPLACE(Salary, '0' , ''))) from EMPLOYEES;