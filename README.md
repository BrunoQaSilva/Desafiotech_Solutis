<h2>Configuração do <code>.env</code></h2>

<p>Crie um arquivo chamado <code>.env</code> na raiz do projeto com o seguinte conteúdo:</p>

<pre>
<code>
TRELLO_KEY=your_key_here
TRELLO_TOKEN=your_token_here
</code>
</pre>

<p>Essas variáveis são utilizadas dentro do arquivo de teste:</p>

<pre>
<code>
// trello_api.cy.js
const key = Cypress.env('TRELLO_KEY');
const token = Cypress.env('TRELLO_TOKEN');
</code>
</pre>

<p>O arquivo <code>cypress.config.js</code> já está configurado para carregar automaticamente essas variáveis de ambiente.</p>

Mapa mental:

![image](https://github.com/user-attachments/assets/ba6c9bc0-5b1e-447c-a881-cf99d6ad9aaf)
