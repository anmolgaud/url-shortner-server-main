const links = require('./sequelize');
const randomString = require('randomstring');

const createShortUrl = async (longUrl) => {
  try {
    const shortUrl = randomString.generate({ length: 5, charset: 'alphabetic', capitalization: 'uppercase' });
    await links.sync();
    await links.create({ shortUrl, longUrl, count: 0 });
    return shortUrl;
  } catch (err) {
    if (err.name === 'UniqueConstraintError') throw new Error('SHORT_URL_EXISTS');
    throw err;
  }
};

const getUrl = async (shortUrl) => {
  try {
    const details = await links.findOne({ where: { shortUrl }});
    if(!details) throw new Error('INVALID_URL');
    await links.increment({ count: 1 }, { where: { shortUrl } });
    return details.longUrl;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createShortUrl,
  getUrl,
}