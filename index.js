/*
|--------------------------------------------------------------------------
| Configuração de DNS
|--------------------------------------------------------------------------
| Utiliza os servidores DNS do Google para evitar problemas de resolução
| de nomes com o MongoDB Atlas.
| Isso ajuda quando o DNS padrão da rede não consegue localizar
| os registros SRV do cluster.
|--------------------------------------------------------------------------
*/

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

/*
|--------------------------------------------------------------------------
| Carregamento das variáveis de ambiente
|--------------------------------------------------------------------------
| O pacote dotenv lê o arquivo .env e disponibiliza as variáveis
| através de process.env.
|--------------------------------------------------------------------------
*/

const dotenv = require("dotenv");
dotenv.config();

/*
|--------------------------------------------------------------------------
| Conexão com o banco de dados
|--------------------------------------------------------------------------
| Importa a função responsável por conectar a aplicação ao
| MongoDB Atlas e executa a conexão.
|--------------------------------------------------------------------------
*/

const connectToDatabase = require("./src/database/connect");

connectToDatabase();

/*
|--------------------------------------------------------------------------
| Módulos utilizados em aulas anteriores
|--------------------------------------------------------------------------
| Descomente apenas quando precisar utilizar.
|--------------------------------------------------------------------------
*/

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

/*
|--------------------------------------------------------------------------
| Classe Person - Exemplo de Orientação a Objetos
|--------------------------------------------------------------------------
| Descomente apenas quando estiver estudando módulos e classes.
|--------------------------------------------------------------------------
*/

// const { Person } = require("./person");
// const person = new Person("Leandro");
// console.log(person.sayMyName());

/*
|--------------------------------------------------------------------------
| Debug das variáveis de ambiente
|--------------------------------------------------------------------------
| Utilize apenas para testes. Não é recomendado deixar exibindo
| usuário e senha em produção.
|--------------------------------------------------------------------------
*/

// console.log("USER:", process.env.MONGODB_USERNAME);
// console.log("PASS:", process.env.MONGODB_PASSWORD);
