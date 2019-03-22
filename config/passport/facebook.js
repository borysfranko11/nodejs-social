'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../');
const User = mongoose.model('User');

/**
 * Expose
 */

module.exports = new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/facebook/callback',
    profileFields: ['email','displayName','name']
  },
  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    const options = {
      criteria: { 'facebook.id': profile.id }
    };
    User.load(options, function (err, user) {
      if (err) return done(err);
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username || profile.displayName,
          provider: 'facebook',
          facebook: profile._json
        });
        user.save(function (err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
  }
);
