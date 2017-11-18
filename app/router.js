'use strict';

module.exports = app => {
	app.all('/user/login', app.oAuth2Server.token(app.config.oAuth2Server.expired));
    app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');
    app.get('/user/getuser', app.oAuth2Server.authenticate(), 'user.getuser');
    app.get('/post/myposts', 'post.myposts');
    app.get('/findcar/getcar', 'findcar.getcar');
    app.post('/findcar/createcar', 'findcar.createcar');
    app.get('/findpeople/getpeople', 'findpeople.getpeople');
    app.post('/findpeople/createpeople', 'findpeople.createpeople');

};