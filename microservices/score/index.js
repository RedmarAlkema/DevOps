require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const client = require("prom-client");
const routes = require("./routes/scoreRoute");
const startConsumer = require("./services/getTarget");
const startUploadConsumer = require("./services/getUpload");
const startgetDeadline = require("./services/getDeadline");

const app = express();
const PORT = process.env.PORT || 3005;
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

register.setDefaultLabels({ service: "score" });
client.collectDefaultMetrics({ register });

app.use(express.json());
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
  res.status(200).json({ status: "ok", service: "score" });
});
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});
app.use("/score", routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Score service draait op poort ${PORT}`));
  })
  .catch((err) => console.log(err));

startConsumer();
startUploadConsumer();
startgetDeadline.start(); 
