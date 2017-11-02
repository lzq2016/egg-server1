'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1506310670022_692';

    // add your config here
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb'
    };
    config.middleware = ['errorHandler','sucessHandle'];
    config.oAuth2Server = {
        grants: ['password'],
        expired: {
            accessTokenLifetime: 3024000
        },
        allowExtendedTokenAttributes:true
    };
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'pc',
        host: '47.94.215.254',
        port: '3306',
        username: 'root',
        password: 'l18131359269'
    };
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