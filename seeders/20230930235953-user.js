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
   await queryInterface.bulkInsert('users', [{
    id : "08bf6d21-4314-41e4-b086-8a6f0a23c93f",
    first_name : "daniel",
    last_name : "uke",
    username : "dan_uke",
    gender : "male",
    email : "dan_uke12@gmail.com",
    password : "themanwhorunstheshow",
    created_at : new Date(),
    updated_at : new Date(),
   },
   {
    id : "9e2af1ab-5ab7-4a7c-924c-f1cd56d162cd",
    first_name : "emmanuel",
    last_name : "adeyemi",
    username : "emmanuel_adeyemi",
    gender : "male",
    email : "emma_adeyemi12@gmail.com",
    password : "alt_node12",
    created_at : new Date(),
    updated_at : new Date(),
   }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', {
      email : "dan_uke@gmail.com"
    })
  }
};
