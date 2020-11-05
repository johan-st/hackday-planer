const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = require('./tasksAPI');
const logger = require('./logger');
const authenticator = require('./authenticator');
const app = express();

// Configs
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(logger);
app.use(authenticator);

// Routers
app.use('/api', api);

// app-routes

app.all('*', (req, res) => {
  console.log(`[${req.id}] handler: 404`);
  res.status(404);
  res.json({
    code: '404',
    messege: 'resource not found',
    api_root: '/api',
  });
});

// INIT
app.listen(port, () => console.log(`listening on port ${port}!`));
