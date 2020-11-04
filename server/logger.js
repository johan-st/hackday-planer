const uuid = require('uuid');

const logger = (req, res, next) => {
  req.id = uuid.v4();
  console.log(`[${req.id}] ${req.method} ${req.url}`);
  next();
};

module.exports = logger;
