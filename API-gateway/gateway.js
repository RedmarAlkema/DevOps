require('dotenv').config({ path: './.env' });

const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'api-gateway' });
});
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Gateway has started on port ' + PORT);
});
