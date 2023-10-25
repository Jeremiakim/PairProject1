'use strict';

const bcryptjs = require('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile);
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate',(securePassword, option)=>{
    const salt = bcryptjs.genSaltSync(8)
    const hash  = bcryptjs.hashSync(securePassword.password, salt)
    securePassword.password = hash
  } )
  return User;
};