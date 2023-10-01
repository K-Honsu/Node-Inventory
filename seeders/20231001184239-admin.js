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
   await queryInterface.bulkInsert('admins', [{
    id : "775569d5-d94a-431f-830a-db979420f925",
    user_id : "05ba71dd-a109-45b3-a740-c31f9caea942",
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
    await queryInterface.bulkDelete("admins", {
      user_id : "05ba71dd-a109-45b3-a740-c31f9caea942"
    })
  }
};
