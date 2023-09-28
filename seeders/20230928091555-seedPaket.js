'use strict';
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const dataPaket = JSON.parse(fs.readFileSync("./data/paket.json", "utf8"));
    const result = dataPaket.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    return queryInterface.bulkInsert("Packages", result, {});
 

  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Packages", null, {});
  }
};
