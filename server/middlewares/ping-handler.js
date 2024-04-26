const os = require('os');
const hostname = os.hostname();


const ping = async (req, res, next) => {
  res.status(200).json({server: hostname});
  next();
}

module.exports = ping;