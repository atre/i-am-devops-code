const express = require('express');
const app = express();
const port = process.env.port || 3000;

// Simple route
app.get('/', function (req, res) {
  res.send(`Like a charm! 👍`);
});

// Wow!
app.listen(port, function () {
  console.log('🚀');
  console.log(`http://localhost:${port}`);
});
