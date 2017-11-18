'use strict';

module.exports = app => {
    return class Findpeople extends app.Service {
        * getPeople(openid) {
            let user = yield this.ctx.model.Findcar.findOne({where: {openid: openid,type:2}});
            if (!user) {
                let user = this.createpeople(openid);
            }
            return user;
        }

        * createpeople(openid) {
            if (!openid) {
                this.ctx.throw(404, ' 创建createpeople openid不存在');
            }

            return yield this.ctx.model.Findpeople.create({openid: openid,type:2});
        }
        * updatepeople(value,openid) {
            if (!openid) {
                this.ctx.throw(404, ' 更新createpeople openid不存在');
            }
            return yield this.ctx.model.Findpeople.update(value,{where:{openid: openid,type:2}});
        }
    }
};