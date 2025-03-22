// vulnerable.js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<form action="/submit" method="post"><input name="data"/><button>Submit</button></form>');
});

app.post('/submit', (req, res) => {
  const userData = req.body.data;
  res.send(`<p>User Data: ${userData}</p>`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
