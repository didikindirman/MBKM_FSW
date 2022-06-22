const bcrypt = require("bcrypt");
const { ROLES } = require("../lib/const");
const SALT_ROUND = 10;

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("didik123", SALT_ROUND);

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "didikindirman",
          email: "didikindirman@gmail.com",
          password: hashedPassword,
          role: ROLES.SUPERADMIN,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
