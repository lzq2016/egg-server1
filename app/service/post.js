'use strict';

module.exports = app => {
    return class Post extends app.Service {
        * getPosts(value) {
            let offset = (value.page-1) || 0;
            let where = {};
            if(value.type && parseInt(value.type) == 0)
            {
                where = {
                    type:[1,2]
                };
            }else if(value.type && parseInt(value.type) != 0){
                where = {
                    type:value.type
                };
            }
            if(value.openid)
            {
                where.openid = value.openid;
            }
            return yield this.ctx.model.Post.findAndCountAll({
                where:where,
                offset:offset,
                limit:10,
                order: [['created_at', 'DESC']],
            });
        }
        * getPost(openid,type) {
            let user = yield this.ctx.model.Post.findOne({where: {openid: openid,type:type}});
            if (!user) {
                let user = this.createPost(openid,type);
            }
            return user;
        }

        * createPost(value) {
            if (!value.openid) {
                this.ctx.throw(404, ' 创建createPost openid不存在');
            }
            if (!value.type) {
                this.ctx.throw(404, ' 创建createPost type不存在');
            }

            return yield this.ctx.model.Post.create(value);
        }
        * updatePost(value,openid,type) {
            if (!openid) {
                this.ctx.throw(404, ' 更新post openid不存在');
            }
            let result = yield this.ctx.model.Post.update(value,{where:{openid: openid,type:type}});
            if(!result[0])
            {
                value.openid = openid;
                value.type = type;
                return yield this.ctx.model.Post.create(value);
            }
            else{
                return result;
            }
        }
    };
};