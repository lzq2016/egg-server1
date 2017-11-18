'use strict';

module.exports = app => {
    const { STRING, INTEGER,BOOLEAN, DATE } = app.Sequelize;

    const Post = app.model.define('post', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        openid:STRING,
        name:STRING,
        phone:STRING,
        sex:BOOLEAN,
        istop:BOOLEAN,
        type:INTEGER,
        user_count:INTEGER,
        expired:BOOLEAN,
        daytype:BOOLEAN,
        from_place:STRING,
        to_place:STRING,
        mid_place:STRING,
        car:STRING,
        note:STRING,
        start_time:DATE
    });

    Post.associate = function() {
        app.model.Post.belongsTo(app.model.User, { foreignKey: 'openid',targetKey:'openid' });
    };

    return Post;
};