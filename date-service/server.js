const express = require('express');
const app = express();

app.get('/date', (req, res) => {
  const today = new Date();
  res.json({ date: today.toDateString() });
});

app.listen(3000, () => console.log('Date service running on port 3000'));
