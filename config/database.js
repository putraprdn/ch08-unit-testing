require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		use_env_variable:
			"postgres://pzxiuvprwboogr:2629f6cdeffc6ec581a5116a711b3a2ecffeb6c47698f8b1bfe874d2d7baa7d7@ec2-34-231-221-151.compute-1.amazonaws.com:5432/d98pcnf5aekrqn",
	},
};
