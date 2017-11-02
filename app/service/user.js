'use strict';

module.exports = app => {
    return class User extends app.Service {
        * getUser(openid) {
            let user = yield this.ctx.model.User.findOne({where:{openid: openid}});
            if (!user) {
                this.ctx.throw(404, 'user not found');
            }
            return user;
        }

        * create(user) {
            if (!user.openid) {
                return "openid不存在";
            }
            let users = yield this.ctx.model.User.findOne({
                where:{
                    openid: user.openid
                }
            });
            if (users) {
                return users;
            } else {
                return yield this.ctx.model.User.create(user);
            }
        }
    };
};