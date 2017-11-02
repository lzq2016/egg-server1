'use strict';

module.exports = app => {
    return class Post extends app.Service {
        * getPosts({offset = 0, limit = 10, order_by = 'created_at', order = 'DESC'}) {
            return yield this.ctx.model.Post.findAndCountAll({
                offset,
                limit,
                order: [[order_by, order.toUpperCase()]],
            });
        }
    };
};