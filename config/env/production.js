// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'production' environment configuration object
module.exports = {
	db: process.env.MONGODB_URI,
	sessionSecret: 'productionSessionSecret',
	facebook: {
		clientID: 'Facebook Application ID',
		clientSecret: 'Facebook Application Secret',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
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
