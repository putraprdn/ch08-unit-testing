"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Users", [
			{
				id: 99999,
				name: "Admin",
				email: "admin@binar@co.id",
				encryptedPassword:
					"$2b$12$kZVEHxo7DFAsZPmg1xaNnOsKcF2aInJoHDV9AtRVIgI913dScfppq", // 123456
				roleId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
