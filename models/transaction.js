'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Profile);
      Transaction.hasMany(models.PackageTransaction);
    }
  }
  Transaction.init({
    date: DataTypes.DATE,
    total_price: DataTypes.INTEGER,
    payment: DataTypes.STRING,
    status: DataTypes.STRING,
    ProfileId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};