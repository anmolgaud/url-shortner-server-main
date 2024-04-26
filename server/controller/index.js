const model = require('../model');
const os = require('os');
const hostname = os.hostname();

const createShortUrl = async (req, res, next) => {
  try {
    const { long_url: longUrl } = req.body;
    const shortUrl = await model.createShortUrl(longUrl);
    res.status(200).json({short_url: shortUrl, server: hostname});
  } catch (err) {
    switch (err.message) {
      case 'SHORT_URL_EXIS':
        res.satus(500).json({message: 'Try again!'});
        break;
      default:
        next(err);
        break;
    }
  }
}

const getUrl = async (req, res, next) => {
  try {
    const { url:shortUrl } = req.params;
    const longUrl = await model.getUrl(shortUrl);
    res.redirect(`https://${longUrl}`);
  } catch (err) {
    switch (err.message) {
      case 'INVALID_URL':
        res.sendStatus(404);
        break;
      default:
        next(err);
        break;
    }
  }
}

module.exports = {
  createShortUrl,
  getUrl,
}