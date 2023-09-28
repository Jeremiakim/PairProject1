'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    static associate(models) {
      Package.hasMany(models.PackageTransaction);
    }
    static getCategory(position) {
      if (position) {
        return Package.findAll({ where: { category: position } });
      }
      return Package.findAll()
    }
  

  }
  Package.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    image : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};