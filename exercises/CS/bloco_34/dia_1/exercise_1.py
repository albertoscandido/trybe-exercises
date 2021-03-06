# Exercício 1 : O primeiro server que iremos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. A ideia aqui é que o projeto tenha rotas GET e POST, para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.
# Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.

# 1. Faça uma chamada GET, utilizando o cURL.
# curl --location --request GET 'http://localhost:3000'



# 2. Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
# curl --location --request POST 'http://localhost:3000' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#     "nome":"Alberto"
# }'



# 3. Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
# curl --location --request POST 'http://localhost:3000' \
# --header 'Authorization: xablau' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#     "nome":"Alberto"
# }'