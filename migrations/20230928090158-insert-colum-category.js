'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Packages", "category", { 
      type: Sequelize.DataTypes.STRING });
  
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Packages", "category",null);
  }
};
