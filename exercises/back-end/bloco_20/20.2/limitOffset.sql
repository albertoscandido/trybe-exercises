USE sakila;
SELECT COUNT(*) FROM rental;
SELECT * FROM rental;
SELECT * FROM rental LIMIT 10;

SELECT * FROM rental LIMIT 10 OFFSET 3;
SELECT * FROM actor;
SELECT * FROM actor LIMIT 10 OFFSET 4;
