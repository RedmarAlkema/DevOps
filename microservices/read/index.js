const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const client = require("prom-client");
const targetRoutes = require("./routes/targetRoutes");
const startConsumer = require("./services/readTarget");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3004;
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

register.setDefaultLabels({ service: "read" });
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

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "read" });
});
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});
app.use("/read", targetRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("📦 MongoDB verbonden");
    app.listen(PORT, () => {
      console.log(`📡 Read Target Service draait op poort ${PORT}`);
    });
  })
  .catch(err => console.error("❌ Fout bij verbinden met MongoDB:", err)
);

startConsumer();
