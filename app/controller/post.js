'use strict';

module.exports = app => {
    class PostController extends app.Controller {

        * mypost() {
            // const ctx = this.ctx;
            // ctx.logger.debug('debug info');
            // ctx.logger.debug(ctx.query);
            this.ctx.body = yield this.ctx.service.post.getPosts(this.ctx.query);
        }
    }
    return PostController;
};