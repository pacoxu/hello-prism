var passport = require('passport')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , tokenStore = require('./lib/token_store');

function register() {
  passport.use('provider', new OAuth2Strategy({
      authorizationURL: 'https://www.provider.com/oauth2/authorize',
      tokenURL: 'https://www.provider.com/oauth2/token',
      clientID: '123-456-789',
      clientSecret: 'shhh-its-a-secret'
      callbackURL: 'https://www.example.com/auth/provider/callback'
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