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
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'https://wsotp.herokuapp.com/auth/google/callback'
  }
};
