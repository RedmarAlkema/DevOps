require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const client = require('prom-client');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const register = new client.Registry();
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests handled by the service',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});
const httpRequestDurationSeconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5],
  registers: [register]
});

register.setDefaultLabels({ service: 'upload' });
client.collectDefaultMetrics({ register });

app.use(express.json());
app.use((req, res, next) => {
  const end = httpRequestDurationSeconds.startTimer();

  res.on('finish', () => {
    const route = req.route ? `${req.baseUrl || ''}${req.route.path}` : req.path;
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
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'upload' });
});
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB verbonden met UploadDB'))
  .catch((err) => console.error('MongoDB fout:', err));

app.use('/upload', uploadRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Upload service draait op poort ${process.env.PORT}`);
});
