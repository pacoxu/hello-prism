var passport = require('passport')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , tokenStore = require('./token_store');

function register() {
  passport.use('provider', new OAuth2Strategy({
      authorizationURL: 'https://10.4.31.229:9440/console/#page/' +
        'authorize/?authorize=true&client_id=test_client_ui&scope=all&' +
        'state=some_state&redirect_uri=http%3A%2F%2Fwww.nutanix.com&response_type=code',
      tokenURL: 'https://10.4.31.229:9440/api/nutanix/v3/oauth/token',
      clientID: 'test_client_ui',
      clientSecret: 'test_client_secret',
      callbackURL: 'http://localhost:5000/auth/provider/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      tokenStore.getInstance().storeToken({
        accessToken: accessToken,
        refreshToken: refreshToken,
        profile: profile
      });
      //We should store the user in some lib here
      console.log("accessToken:", accessToken);
      console.log("refreshToken:", refreshToken);
      console.log("profile:", profile);
      done(err, user);
    }
  ));
};


module.exports = {
  register: register
}