'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Va te faire voir diabete !!!!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);