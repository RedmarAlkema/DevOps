const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'auth' });
});
app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Auth module gestart op poort ${PORT}`));
  })
  .catch(err => console.log(err));
