'use strict';

module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1506310670022_692';

	// add your config here
	config.middleware = [];

	config.oAuth2Server = {
		grants: ['password'],
	};
	// config.sequelize = {
	// 	dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
	// 	database: 'auth',
	// 	host: 'localhost',
	// 	port: '3306',
	// 	username: 'root',
	// 	password: 'Li18131359269',
	// };
	config.logger = {
		level: 'DEBUG',
		consoleLevel: 'DEBUG'
	};
	config.security = {
		csrf: {
			enable: false
		},
	};

	return config;
};