'use strict';

module.exports = app => {
    class FindPeopleController extends app.Controller {
        * getpeople() {
            const openid = this.ctx.query.openid;
            var result = yield this.ctx.service.post.getPost(openid,2);
            if(result){
                this.ctx.body = {code:1,result};
            }
            else
            {
                this.ctx.body = {code:0};
            }
        }

        * updatepeople() {
            const ctx = this.ctx;
            const openid = ctx.query.openid;
            var result = yield ctx.service.post.updatePost(ctx.request.body, openid,2);
            console.log(result,"result");
            if (result[0] == 1) {
                ctx.body = {code: 1};
            } else {
                ctx.body = {code: 0};
            }
        }

        * createpeople() {
            const ctx = this.ctx;
            var result = yield ctx.service.post.createPost(ctx.request.body);
            if (result.dataValues.id) {
                ctx.body = {
                    code: 1,
                    data:{
                        id:result.dataValues.id
                    }
                };
            } else {
                ctx.body = {code: 0};
            }
        }
    }

    return FindPeopleController;
};