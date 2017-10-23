'use strict';

module.exports = app => {
	class UserController extends app.Controller { * authenticate() {
			this.ctx.body = 'ok';
		}
	}
	return UserController;
};