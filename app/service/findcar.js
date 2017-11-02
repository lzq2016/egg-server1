'use strict';

module.exports = app => {
    return class Findcar extends app.Service {
        * getCar(openid) {
            let user = yield this.ctx.model.Findcar.findOne({where: {openid: openid}});
            if (!user) {
                let user = this.createcar(openid);
            }
            return user;
        }

        * createcar(openid) {
            if (!openid) {
                this.ctx.throw(404, ' 创建createcar openid不存在');
            }

            return yield this.ctx.model.Findcar.create({openid: openid});
        }
        * updatecar(value,openid) {
            if (!openid) {
                this.ctx.throw(404, ' 更新createcar openid不存在');
            }
            return yield this.ctx.model.Findcar.update(value,{where:{openid: openid}});
        }
    }
};
