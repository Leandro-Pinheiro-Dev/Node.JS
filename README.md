# API REST com Node.js, Express, MongoDB Atlas, Mongoose, Postman e EJS

## 📖 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de estudar e aplicar conceitos fundamentais de desenvolvimento Backend utilizando Node.js.

A aplicação implementa uma API REST completa para gerenciamento de usuários, permitindo realizar operações de cadastro, consulta, atualização e exclusão de dados armazenados no MongoDB Atlas.

Durante o desenvolvimento foram utilizados:

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Postman
* EJS
* Dotenv
* Nodemon

---

# 🎯 Objetivos

* Compreender o funcionamento do Node.js
* Criar APIs REST utilizando Express
* Conectar aplicações ao MongoDB Atlas
* Utilizar Mongoose para manipulação de dados
* Realizar operações CRUD
* Testar endpoints utilizando Postman
* Renderizar páginas utilizando EJS
* Trabalhar com variáveis de ambiente

---

# 🛠 Tecnologias Utilizadas

| Tecnologia    | Descrição                              |
| ------------- | -------------------------------------- |
| Node.js       | Ambiente de execução JavaScript        |
| Express       | Framework para criação de APIs         |
| MongoDB Atlas | Banco de dados NoSQL em nuvem          |
| Mongoose      | ODM para MongoDB                       |
| Postman       | Ferramenta de testes de API            |
| EJS           | Template Engine                        |
| Dotenv        | Gerenciamento de variáveis de ambiente |
| Nodemon       | Reinicialização automática do servidor |

---

# 📂 Estrutura do Projeto

```text
curso-nodejs/
│
├── index.js
│
├── modules/
│   └── express.js
│
├── src/
│   ├── database/
│   │   ├── connect.js
│   │   └── models/
│   │       └── user.model.js
│   │
│   └── views/
│       ├── index.ejs
│       └── partials/
│           └── head.ejs
│
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Instalação do Projeto

## 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
```

Entrar na pasta:

```bash
cd curso-nodejs
```

---

## 2. Instalar Dependências

```bash
npm install
```

Pacotes instalados:

```bash
npm install express
npm install mongoose
npm install dotenv
npm install ejs
npm install mongodb
npm install nodemon --save-dev
```

---

# 🌎 Configuração do MongoDB Atlas

## 1. Criar Conta

Acesse:

https://www.mongodb.com/atlas

Crie sua conta gratuita.

---

## 2. Criar Projeto

Após o login:

* Create Project
* Defina um nome para o projeto

---

## 3. Criar Cluster

* Create Cluster
* Escolha o plano gratuito (M0)
* Aguarde a criação

---

## 4. Configurar Acesso de Rede

Menu:

```text
Security → Network Access
```

Adicionar:

```text
0.0.0.0/0
```

Permite acesso externo durante o desenvolvimento.

---

## 5. Criar Usuário do Banco

Menu:

```text
Security → Database Access
```

Criar usuário:

```text
Username: seu_usuario
Password: sua_senha
```

---

# 🔐 Variáveis de Ambiente

Criar um arquivo `.env` na raiz do projeto:

```env
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha
```

---

# 🔌 Configuração da Conexão

Arquivo:

```text
src/database/connect.js
```

```javascript
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.4gphc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToDatabase;
```

---

# ▶️ Executando o Projeto

Iniciar a aplicação:

```bash
npm run test
```

Saída esperada:

```text
Rodando com Express na porta 8080!
✅ Conexão ao banco de dados realizada com sucesso!
```

---

# 📡 Rotas da API

Base URL:

```text
http://localhost:8080
```

---

## Buscar Todos os Usuários

### Request

```http
GET /users
```

### Exemplo

```http
GET http://localhost:8080/users
```

### Response

```json
[
  {
    "_id": "...",
    "firstName": "Leandro",
    "lastName": "Pinheiro"
  }
]
```

---

## Buscar Usuário por ID

### Request

```http
GET /users/:id
```

### Exemplo

```http
GET http://localhost:8080/users/6848b4...
```

---

## Cadastrar Usuário

### Request

```http
POST /users
```

### Body

```json
{
  "firstName": "Leandro",
  "lastName": "Pinheiro",
  "email": "l10@gmail.com",
  "password": "12345678"
}
```

### Response

```json
{
  "_id": "...",
  "firstName": "Leandro",
  "lastName": "Pinheiro"
}
```

---

## Atualizar Usuário

### Request

```http
PATCH /users/:id
```

### Body

```json
{
  "firstName": "Leandro Atualizado"
}
```

---

## Excluir Usuário

### Request

```http
DELETE /users/:id
```

---

# 🧪 Testando com Postman

O Postman foi utilizado para validar todos os endpoints da aplicação.

## GET

```http
GET http://localhost:8080/users
```

Retorna todos os usuários cadastrados.

---

## POST

```http
POST http://localhost:8080/users
```

Body:

```json
{
  "firstName": "Maria",
  "lastName": "Pinheiro",
  "email": "maria@gmail.com",
  "password": "12345678"
}
```

Cadastra um novo usuário.

---

## PATCH

```http
PATCH http://localhost:8080/users/:id
```

Atualiza informações de um usuário existente.

---

## DELETE

```http
DELETE http://localhost:8080/users/:id
```

Remove um usuário do banco de dados.

---

# 🖥️ Renderização com EJS

Rota responsável pela visualização dos usuários:

```http
GET /views/users
```

Renderização:

```javascript
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});
```

Exemplo EJS:

```ejs
<% users.forEach(user => { %>
    <h3><%= user.firstName %></h3>
<% }) %>
```

---

# 🔄 Fluxo da Aplicação

```text
Usuário
   │
   ▼
Postman / Navegador
   │
   ▼
Express
   │
   ▼
Mongoose
   │
   ▼
MongoDB Atlas
   │
   ▼
Resposta JSON / Página EJS
```

---

# 🚨 Problemas Encontrados

## Erro DNS

```text
querySrv ECONNREFUSED
```

Solução:

```javascript
const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);
```

---

## Erro de Autenticação

```text
Authentication Failed
```

Solução:

* Verificar usuário
* Verificar senha
* Verificar string de conexão

---

# 📚 Aprendizados

Durante este projeto foram praticados:

* Estruturação de APIs REST
* CRUD com MongoDB
* Uso do Mongoose
* Configuração do MongoDB Atlas
* Variáveis de ambiente
* Middleware
* Renderização com EJS
* Testes utilizando Postman
* Resolução de problemas de DNS e autenticação

---

# 👨‍💻 Autor

**Leandro Pinheiro dos Santos**

Tecnólogo em Sistemas Embarcados – Fatec Jundiaí

Projeto desenvolvido para estudos de Node.js, Express, MongoDB Atlas e desenvolvimento Backend.
