// const express = require('express');
// const app = express();

// app.get('/ip', (req, res) => {
//   res.json({ ip: req.ip });
// });

// app.listen(3001, () => console.log('IP service running on port 3001'));




const express = require('express');
const app = express();

// Trust proxy headers (important if behind reverse proxy or load balancer)
app.set('trust proxy', true);

app.get('/ip', (req, res) => {
  let ip = req.ip;

  // If IPv6 format like ::ffff:127.0.0.1 → extract IPv4
  if (ip.startsWith("::ffff:")) {
    ip = ip.split(":").pop();
  }

  // Handle localhost (::1) case
  if (ip === "::1") {
    ip = "127.0.0.1";
  }

  res.json({ ip });
});

app.listen(3001, () => console.log('IP service running on port 3001'));
