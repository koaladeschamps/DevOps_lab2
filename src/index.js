const express = require('express');
const app = express();
port  = 3000;//com

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Chat is waiting for you at http://localhost:${port}`)
 })