const Links = require('../model/sequelize');

(async () => await Links.sync())();