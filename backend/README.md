# API de Usuário

API de CRUD de usuário simples.

## Como rodar?
- Primeiramente instale todas as dependências usando: ```npm install```.
- Em seguida instale o Knex com: ```npm install knex --save```.
- Agora você precisará instalar o sqlite3 no seu computador (varia de SO para SO): https://www.sqlite.org/index.html.
- Em seguida execute: ```npx knex migrate:latest``` para executar as migrations.
- E finalmente execute: ```npm run start:dev``` para rodar o servidor.

## Como usar?
A API roda em [http://localhost:5000/users](http://localhost:5000/users).

A API tem 6 rotas, você pode vê-las no arquivo src/routes.ts, mas elas são:
- POST ```/users/login``` que recebe um email, senha e se é admin ou não e retorna o(a) usuário(a) caso encontrado;
- GET ```/users``` que retorna todos os usuários cadastrados;
- GET ```/users/:id``` que retorna o usuário(a) do id informado caso encontrado(a);
- POST ```/users``` que recebe um corpo com os dados do(a) usuário(a) e cadastra no banco de dados;
- PUT ```/users/:id``` que recebe o id de um(a) usuário(a) e um corpo com dados que serão usados para atualizar o cadastro;
- DELETE ```/users/:id``` que recebe um id e exclui o(a) usuário(a) caso exista.
