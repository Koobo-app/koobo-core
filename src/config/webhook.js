const app = require('../app');

app.post('/hook', (req, res) => {
  console.log(req.body);
  res.status(200).json('Webhook is Active').end();
});
