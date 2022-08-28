<p>
<a href="#sobre">Sobre</a> |
<a href="#tecnologia">Tecnologias</a> |
<a href="#documentação">Documentação</a> |
<a href="#postmam">Postmam</a> |
<a href="#features">Features</a> |
<a href="#modelo">Modelagem</a> |
<a href="#back">Rodando o back-end</a> |
<a href="#desenvolvedores">Desenvolvedores</a>
</p>

<h1 id="sobre">💳 Back-End Wirecard </h1>

Esse é o Back-End do Wirecard, esta aplicação simula uma pequena parte da Wirecard. Permitindo que cliente possam realizar seus pagamentos seja por meio de boleto
ou cartão de credito.
A Api foi construida em **NodeJS** utilizando **TypeScript**, o FrameWork **ExpressJS** e o banco de dados **MySQL**, além de teste unitários com a lib **Jest**. O Projeto foi estruturado utilizando **PROGRAMAÇÃO ORIENTADA A OBJETOS(POO)** e princípios **S.O.L.I.D.**


<h2 id="tecnologia">🛠 Tecnologias</h2>

- [NodeJS](https://nodejs.org/en/docs/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](http://expressjs.com/pt-br/)
- [Bcrpty](https://www.npmjs.com/package/bcrypt)
- [Uuid](https://www.npmjs.com/package/uuid)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Knex](https://knexjs.org/guide/)
- [Jest](https://jestjs.io/pt-BR/docs/api)
- [MySql](https://dev.mysql.com/doc/)


- ### Link base da API https://projeto-wirecard-diego.herokuapp.com

<h2 id="documentação">📃 Documentação</h2>

- Na documentação você encontra todas informações sobre como usar cada endpoint da API. Você pode clicar em "Run in Postman" para testar os endpoints na versão web do postman.
- [Documentação](https://documenter.getpostman.com/view/20352107/VUjMnkSs)


<h2 id="postmam"> <img src="https://user-images.githubusercontent.com/98994187/182048033-f81fac19-1c26-45c0-96da-a5ffbc0defec.svg" height="20" width="20" alt="javascript logo"  /> Postmam</h2>

Voçê pode testar a API com Postman.
- O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.
- [Download do Postamam](https://www.postman.com/downloads/)


<h2 id="features">✔️ Features</h2>

A API Possui endPoints para Login, cadastro de novo usuário, registro de pagamentos por boleto ou cartão de credito e consulta de pagamento por ID

👤 Login
- [x] Login com email e senha
- [x] Autenticação por token Jsonwebtoken;


📝 Cadastro 
- [x] Cadastro de usuário 
- [x] Criptografia da senha do tipo hash com Bcrypt

💳 Pagamentos
- [x] Registrar pagamento com boleto
- [x] Registrar pagamento com cartão de credito
- [x] Validação de cartão de credito, cvv e data de expiração do cartão
- [x] Simulação de pagamento aprovado ou recusado 
- [x] Busca status de pagamento por ID vinculado ao usuário.

<h2 id="modelo"> 🎲 Modelagem do banco de dados</h2>

O banco de dados é modelado com 2 entidades: User e Payment. Da seguinte forma

→ User - id, nome, email, cpf, password

→ Payment - payment_id, status, user_id,  client_id,  amount,  type,  card_holder_name,  card_number,  card_expiration_date, 
 card_cvv,  emissor ,  id do usuário(chave estrangeira) 

Testes unitarios foram realizados nos endpoints de create payment e get payment

<h2 id="back"> 🖥 Rodando o Back End (servidor)</h2>

### Pre-Requisitos

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/),
- Uma instancia de um banco de dados MySQL
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/deduardolima/wirecard.git
2.  cd wirecard/
```
* Para instalar e rodar o projeto
```
3. npm install
4. npm dev
    ou
3. yarn install
4. yarn dev
```
* Para rodar os testes 
```
5. npm test
5. yarn test
```

Renomeie o arquivo ```.env.example```  para ```.env``` e preencha as variáveis com seus dados do banco de dados MySQL. É muito importante para a execução do servidor.

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>         
<td><a href="https://github.com/deduardolima"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98969787?v=4" width="100px;" alt="Imagem profile Diego Lima desenvolvedor"/><br /><sub><b> Diego Lima</b></sub></a><br />   
</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
