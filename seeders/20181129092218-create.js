'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Clocks', [
        {
          manufacturer: 'Casio',
          model: 'Szamológépes',
          type: 'retro',
          price: 1500,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          manufacturer: 'Rolex',
          model: 'Puccos',
          type: 'arany',
          price: 30000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
