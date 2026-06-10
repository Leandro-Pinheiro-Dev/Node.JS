const { error } = require("console");
const fs = require("fs");
const path = require("path");

//CRIAR PASTA
// fs.mkdir(path.join(__dirname, "/Test"), (error) => {
//   if (error) {
//    return console.log("Erro:", error);
//  }

//  console.log("Pasta criada com sucesso!");
// });

//CRIAR ARQUIVO
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  " hello node!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo criado com sucesso!");
  },
);

//ADICIONAR Á UM ARQUIVO
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Leandro pinheiro!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo adicionado com sucesso!");
  },
);

//LER ARQUIVO
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log(data);
  },
);
