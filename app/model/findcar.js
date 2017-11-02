'use strict';

module.exports = app => {
    const { STRING, INTEGER,BOOLEAN, DATE } = app.Sequelize;

    const Findcar = app.model.define('findcar', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        openid:STRING,
        start_time:DATE,
        from_place:STRING,
        to_place:STRING,
        user_count:INTEGER,
        note:STRING,
        name:STRING,
        sex:BOOLEAN,
        phone:STRING
    });

    Findcar.prototype.associate = function() {
        app.model.Findcar.belongsTo(app.model.User, { foreignKey: 'openid',targetKey:'openid' });
    };

    return Findcar;
};