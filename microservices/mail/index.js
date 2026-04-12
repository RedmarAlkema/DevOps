const express = require("express");
const dotenv = require("dotenv");
const client = require("prom-client");
const startConsumer = require("./services/readRegister");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;
const register = new client.Registry();
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests handled by the service",
  labelNames: ["method", "route", "status_code"],
  registers: [register]
});
const httpRequestDurationSeconds = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5],
  registers: [register]
});

register.setDefaultLabels({ service: "mail" });
client.collectDefaultMetrics({ register });

app.use((req, res, next) => {
  const end = httpRequestDurationSeconds.startTimer();

  res.on("finish", () => {
    const route = req.route ? `${req.baseUrl || ""}${req.route.path}` : req.path;
    const labels = {
      method: req.method,
      route,
      status_code: String(res.statusCode)
    };

    httpRequestsTotal.inc(labels);
    end(labels);
  });

  next();
});

app.get("/", (req, res) => {
  res.send("Mail Service draait");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "mail" });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

startConsumer().catch((err) => {
  console.error("Fout bij starten van RabbitMQ consumer:", err.message);
});

app.listen(PORT, () => {
  console.log(`Mail Service draait op poort ${PORT}`);
});
