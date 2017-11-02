'use strict';

module.exports = app => {
    const { STRING, INTEGER,BOOLEAN } = app.Sequelize;

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        openid:STRING,
        name:STRING,
        sex:BOOLEAN,
        phone:STRING
    });
    User.prototype.associate = function() {
        app.model.User.hasMany(app.model.Post, { foreignKey: 'openid' });
        app.model.User.hasOne(app.model.findcar, { foreignKey: 'openid' });
    };
    return User;
};