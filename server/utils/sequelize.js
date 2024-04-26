
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('easyurl', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();

    console.info(`Connected to databse`)
  } catch (err) {
    console.error(`DB error: ${err}`);
  }
})();

module.exports = sequelize;
