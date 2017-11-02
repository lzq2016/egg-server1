'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        * getcar() {
            const openid = this.ctx.query.openid;
            this.ctx.body = yield this.ctx.service.findcar.getCar(openid);
        }

        * updatecar() {
            const ctx = this.ctx;
            const openid = ctx.query.openid;
            var result = yield ctx.service.findcar.updatecar(ctx.request.body, openid);
            console.log(result[0], "result");
            if (result == 1) {
                ctx.body = {code: 1};
            } else {
                ctx.body = {code: 0};
            }
        }
    }

    return UserController;
};