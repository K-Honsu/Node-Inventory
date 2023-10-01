'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Items", [{
    id : 3,
    name : "Day in the life of a software Engineer",
    price : "40",
    size : "large",
    category_id : 1,
    created_at : new Date(),
    updated_at : new Date(),
   }, {
    id : 2,
    name : "Day in the life of a principal Engineer",
    price : "100",
    size : "small",
    category_id : 1,
    created_at : new Date(),
    updated_at : new Date(),
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
