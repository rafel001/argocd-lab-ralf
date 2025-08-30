const express = require('express');
const app = express();

app.get('/time', (req, res) => {
  const now = new Date();
  res.json({ time: now.toTimeString() });
});

app.listen(3000, () => console.log('Time service running on port 3000'));
