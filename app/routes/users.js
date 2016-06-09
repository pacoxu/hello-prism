var express = require('express');
var request = require('request');

var tokenStore = require('../lib/token_store'),
	appEnv = require('../lib/app_env');


var router = express.Router();


router.get('/', function(req, res, next) {
	var token = tokenStore.getInstance().getToken();
	var api = '/v3/users/me';
	request.get(appEnv.restUrl + api)
		.auth(null, null, true, token.accessToken)
		.on('data', function(data) {
	    var user_data=JSON.parse(data);
	    res.render('users', { 
	    	title: "User Permissions", 
	    	user_data: user_data, 
	    	api: api });
	  })
		.on('error', function(err){
			console.err('Error in fetching data:', err);
			res.redirect('/');
		});
});

module.exports = router;
