const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.4gphc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log("✅ Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:");
    console.error(error);
  }
};

module.exports = connectToDatabase;
