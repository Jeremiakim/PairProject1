'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Transactions", "ProfileId", {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Profiles",
        key : "id"
      }
    }); 
 },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable("Transactions", "ProfileId",null);
  }
};
