USE sakila;

-- Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT * FROM customer;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema 
-- e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT first_name FROM customer
WHERE active = 0 
AND
first_name <> 'KENNETH'
ORDER BY first_name;

-- O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição, dos 100 filmes com 
-- o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm 
-- o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM film;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' 
AND
replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- Quantos clientes estão ativos e na loja 1 ?
SELECT COUNT(*) FROM customer
WHERE active = 1 
AND store_id = 1;

-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1 .
SELECT * FROM customer
WHERE active = 1 
AND store_id = 1;

-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes.
-- Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM film;
SELECT title FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

