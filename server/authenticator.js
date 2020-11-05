const uuid = require('uuid');

const authenticator = (req, res, next) => {
  req.isAuthentic = true;
  req.user = 'dev-user';
  // console.log(`[${req.id}] auth:[${req.isAuthentic}], user:[${req.user}]`);
  next();
};

module.exports = authenticator;
