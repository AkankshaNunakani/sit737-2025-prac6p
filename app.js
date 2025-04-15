const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(" Updated Kubernetes Node.js App!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
