const path = require("path");

//path.basename> Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//path.dirname> Nome do diretorio atual
console.log(path.dirname(__filename));

//path.extname> Extensão so arquivo
console.log(path.extname(__filename));

//path.parse> Criar objeto Path
console.log(path.parse(__filename));

// Junta camnhos de arquivos
console.log(path.join(__dirname, "testando", "deu certo"));
