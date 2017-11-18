'use strict';

module.exports = app => {
    const { STRING, INTEGER,BOOLEAN, DATE } = app.Sequelize;

    const Findpeople = app.model.define('findpeople', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        openid:STRING,
        start_time:DATE,
        from_place:STRING,
        mid_place:STRING,
        to_place:STRING,
        car:STRING,
        user_count:INTEGER,
        note:STRING,
        name:STRING,
        sex:BOOLEAN,
        phone:STRING
    });

    Findpeople.prototype.associate = function() {
        app.model.Findcar.belongsTo(app.model.User, { foreignKey: 'openid',targetKey:'openid' });
    };

    return Findpeople;
};