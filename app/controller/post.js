'use strict';

module.exports = app => {
    class PostController extends app.Controller {

        * myposts() {
            let result = yield this.ctx.service.post.getPosts(this.ctx.query);
            if(result)
            {
                this.ctx.body = {
                    code:1,
                    data:result.rows
                };
            }else{
                this.ctx.body = {
                    code:0
                };
            }
        }
    }
    return PostController;
};