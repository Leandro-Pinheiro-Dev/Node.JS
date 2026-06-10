// ======================================================
// IMPORTAÇÃO DAS DEPENDÊNCIAS
// ======================================================

// Framework responsável pela criação da API
const express = require("express");

// Model do MongoDB (Mongoose)
const UserModel = require("../src/database/models/user.model");

// Cria a aplicação Express
const app = express();

// ======================================================
// CONFIGURAÇÕES GERAIS
// ======================================================

// Permite que a API receba e interprete JSON
app.use(express.json());

// Configuração do motor de templates EJS
app.set("view engine", "ejs");

// Define a pasta onde estão os arquivos .ejs
app.set("views", "src/views");

// ======================================================
// MIDDLEWARE DE LOG
// ======================================================

// Executado antes de qualquer rota
// Utilizado para monitorar as requisições recebidas
app.use((req, res, next) => {
  console.log("================================");
  console.log(`Método: ${req.method}`);
  console.log(`Content-Type: ${req.headers["content-type"]}`);
  console.log(`Data/Hora: ${new Date()}`);
  console.log("================================");

  // Continua para a próxima etapa
  next();
});

// ======================================================
// ROTA PARA RENDERIZAÇÃO DE VIEW (EJS)
// ======================================================

// Exibe todos os usuários utilizando um template EJS
app.get("/views/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.render("index", { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ======================================================
// ROTAS CRUD
// ======================================================

// ------------------------------------------------------
// READ - Listar todos os usuários
// GET /users
// ------------------------------------------------------
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ------------------------------------------------------
// READ - Buscar usuário por ID
// GET /users/:id
// ------------------------------------------------------
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ------------------------------------------------------
// CREATE - Criar novo usuário
// POST /users
// ------------------------------------------------------
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ------------------------------------------------------
// UPDATE - Atualizar usuário
// PATCH /users/:id
// ------------------------------------------------------
app.patch("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true, // retorna o documento atualizado
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ------------------------------------------------------
// DELETE - Remover usuário
// DELETE /users/:id
// ------------------------------------------------------
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ======================================================
// INICIALIZAÇÃO DO SERVIDOR
// ======================================================

// Porta onde a API ficará disponível
const PORT = 8080;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
