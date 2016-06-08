var passport = require('passport')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , tokenStore = require('./token_store');

function register() {
  passport.use('provider', new OAuth2Strategy({
      authorizationURL: 'https://10.4.31.229:9440/console/#page/authorize/',
      tokenURL: 'https://10.4.31.229:9440/api/nutanix/v3/oauth/token',
      clientID: 'test_client_app',
      clientSecret: 'test_client_secret',
      callbackURL: 'http://localhost:3000/auth/provider/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      tokenStore.getInstance().storeToken({
        accessToken: accessToken,
        refreshToken: refreshToken,
        profile: profile
      });
      done(null, null);
    }
  ));
};


module.exports = {
  register: register
}