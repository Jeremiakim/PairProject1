'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    static associate(models) {
      Package.hasMany(models.PackageTransaction);
    }
    static getCategory(position) {
      if (position) {
        return Package.findAll({ where: { category: position } });
      }
      return Package.findAll();
    }
    calculateTotalPrice(quantity) {
      return this.price * quantity;
    }
  }
  Package.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Nama produk tidak boleh nol'
        },
        notEmpty : {
          msg : 'Nama produk tidak boleh kosong'
        }
      }
    },
    description: {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Deskipsi tidak boleh nol'
        },
        notEmpty : {
          msg : 'Deskipsi tidak boleh nol'
        }
      }
    },
    price: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Harga tidak boleh nol'
        },
        notEmpty : {
          msg : 'Harga tidak boleh kosong'
        }
      }
    },
    category: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Kategori tidak boleh nol'
        },
        notEmpty : {
          msg : 'Kategori tidak boleh kosong'
        }
      }
    },
    image : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'Gambar tidak boleh nol'
        },
        notEmpty : {
          msg : 'Gambar tidak boleh kosong'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};