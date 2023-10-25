'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PackageTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PackageTransaction.belongsTo(models.Transaction);
      PackageTransaction.belongsTo(models.Package);
    }
  }
  PackageTransaction.init({
    TransactionId: DataTypes.INTEGER,
    PackageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PackageTransaction',
  });
  return PackageTransaction;
};