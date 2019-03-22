'use strict';

/**
 * Expose
 */

module.exports = {
  /* db: 'mongodb://localhost/noobjs_dev', */
  db:'mongodb://heroku_rlhptp6t:46b5r5ng9qasjbsr8anvtftud8@ds121406.mlab.com:21406/heroku_rlhptp6t',
  facebook: {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/twitter/callback'
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/github/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/linkedin/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/google/callback'
  }
};
