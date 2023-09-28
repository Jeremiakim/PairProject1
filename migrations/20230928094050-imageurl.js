'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Packages", "image", {
      type: Sequelize.DataTypes.STRING,
    });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Packages", "image", null);
  }
};
