const path = require('path');
const nconf = require('nconf');

module.exports = app => {

  // Mock Data
  // nconf.use('file', {
  //   file: path.join(app.config.baseDir, 'app/mock/db.json'),
  // });

  class Model {
    constructor(ctx) {
      this.ctx = ctx;
    }

    * getClient(clientId, clientSecret) {
      app.logger.debug("getClient");
      app.logger.debug(clientId, "clientId");
      app.logger.debug(clientSecret, "clientSecret");

      const client = {
        "grants": [
          "password"
        ]
      };
      return client;
    }

    * getUser(username, password) {
      app.logger.debug("getUser");
      app.logger.debug(username, "username");
      app.logger.debug(password, "password");
      const result = yield this.ctx.curl('https://api.weixin.qq.com/sns/jscode2session', {
        // 必须指定 method
        method: 'GET',
        // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
        contentType: 'json',
        data: {
          appid: "wxaa96bb0942b0eff2",
          secret: "0b44d65c2e289bc8bee75e5b9df23b99",
          js_code: "011AQ5Lt1gznua04M0Nt18GfLt1AQ5Lr",
          grant_type: "authorization_code"
        },
        // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        dataType: 'json',
      });
      app.logger.debug(result, "result");

      return {
        userId: 123
      };
    }

    * getAccessToken(bearerToken) {
      app.logger.debug("getAccessToken");
      // const token = nconf.get('token');
      // token.accessTokenExpiresAt = new Date(token.accessTokenExpiresAt);
      // token.refreshTokenExpiresAt = new Date(token.refreshTokenExpiresAt);
      // const user = nconf.get('user');
      // const client = nconf.get('client');
      // token.user = user;
      // token.client = client;

      // if (bearerToken != token.accessToken)
      //   return;
      // else
      //   return token;
    }

    * saveToken(token, client, user) {
      app.logger.debug("saveToken");
      console.log(token, "token");
      console.log(user, "user");
      console.log(client, "client");
      const _token = Object.assign({}, token, {
        user
      }, {
        client
      });
      // nconf.set('token', _token);
      // nconf.save();
      return _token;
    }
  }

  return Model;
};