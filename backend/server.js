// Carregar variáveis de ambiente do .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ Erro: MONGO_URI não está definido no arquivo .env");
  process.exit(1);
}

console.log("Tentando conectar ao MongoDB...");

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Conectado ao MongoDB!");
})
.catch((err) => {
  console.error("❌ Erro ao conectar ao MongoDB:", err);
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('🚀 Backend do AdPilot rodando com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});