const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {

    done(null, user);
  
});

passport.use(new GoogleStrategy({
    clientID: "672844185204-bklbder3vmaut1hktqnbr5i5q5p3jgt3.apps.googleusercontent.com",
    clientSecret: "EIWrJ85V_i61And_XApIt-CV",
    callbackURL: "https://express-local-library-website.herokuapp.com/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile)
      return done(null, profile);
    
  }
));



function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
