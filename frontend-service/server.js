require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const TIME_URL = process.env.TIME_URL;
const DATE_URL = process.env.DATE_URL;
const IP_URL = process.env.IP_URL;

app.use(express.static(path.join(__dirname)));

app.get('/api/time', async (req, res) => {
  const response = await fetch(TIME_URL);
  res.json(await response.json());
});

app.get('/api/date', async (req, res) => {
  const response = await fetch(DATE_URL);
  res.json(await response.json());
});

app.get('/api/ip', async (req, res) => {
  const response = await fetch(IP_URL);
  res.json(await response.json());
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
