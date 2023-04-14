const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// API endpoints directory
app.use('/', require('./api'));

// Connect Server
app.listen(port, () => {
  console.log(`A server session has been created on port ${port}. \nAccessible via http://localhost:${port}`)
})