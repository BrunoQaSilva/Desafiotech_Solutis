O .env deve ser configurado seguindo os parametros

Dentro do .env
TRELLO_KEY=your_key_here
TRELLO_TOKEN=your_token_here

Dentro do arquivo trello_api.cy.js
const key = Cypress.env('TRELLO_KEY');
const token = Cypress.env('TRELLO_TOKEN');

Cypress.config já esta configurado para receber esses parametros.
