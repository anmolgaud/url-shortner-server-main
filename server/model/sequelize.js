const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/sequelize');

class Links extends Model {};

Links.init({
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  longUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    }
  }
}, {
  sequelize,
  modelName: 'links_mapping',
  underscored: true,
  freezeTableName: true,
})

module.exports = Links;