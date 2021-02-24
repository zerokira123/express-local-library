const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "672844185204-bklbder3vmaut1hktqnbr5i5q5p3jgt3.apps.googleusercontent.com",
    clientSecret: "EIWrJ85V_i61And_XApIt-CV",
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

exports.google = function(req, res) {
    
    res.render('google_12');
  };