// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'production' environment configuration object
module.exports = {
	db: process.env.MONGODB_URI,
	sessionSecret: 'productionSessionSecret',
	facebook: {
		clientID: '1531839423789714',
		clientSecret: '3932a921f4cb45f0f36e1982afb57047',
		callbackURL: 'https://still-forest-70102.herokuapp.com/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '874411420578-cpdbmos54rtje3lp27497p0d412qbmnn.apps.googleusercontent.com',
		clientSecret: 'Wwo_mWGfWWHHcW5brfvw-ySU',
		callbackURL: 'https://still-forest-70102.herokuapp.com/oauth/google/callback'
	}
};
