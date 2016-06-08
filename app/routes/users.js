var express = require('express');
var request = require('request');

var tokenStore = require('../lib/token_store');


var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	token = tokenStore.getInstance().getToken();
	request.get('https://10.4.31.229:9440/api/nutanix/v3/users/me')
		.auth(null, null, true, token.accessToken)
		.on('data', function(data) {
	    var user_data=JSON.parse(data);
	    console.log(user_data);
	    res.render('users', { title: "User Permissions", user_data: user_data });
	  });
});

module.exports = router;
