const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Node.js app running in Kubernetes!');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
