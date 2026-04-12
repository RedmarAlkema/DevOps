const express = require("express");
const dotenv = require("dotenv");
const startConsumer = require("./services/readRegister");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.get("/", (req, res) => {
  res.send("Mail Service draait");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "mail" });
});

startConsumer().catch((err) => {
  console.error("Fout bij starten van RabbitMQ consumer:", err.message);
});

app.listen(PORT, () => {
  console.log(`Mail Service draait op poort ${PORT}`);
});
