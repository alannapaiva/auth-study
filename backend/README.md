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

A API tem 5 rotas, você pode vê-las no arquivo src/routes.ts
