// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'production' environment configuration object
module.exports = {
	db: process.env.MONGODB_URI,
	sessionSecret: 'productionSessionSecret',
	facebook: {
		clientID: '218914405143641',
		clientSecret: '350273c9c3f7d4284ce3e80833571d33',
		callbackURL: 'https://still-forest-70102.herokuapp.com/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'FIwCJqhTNPaDmg1MV0vgdGytF',
		clientSecret: 'eLLGWsZk9aBNEQvaNkqHLd45gXbqG5KZ3TdZFFVrksvpVd4OOy',
		callbackURL: 'https://still-forest-70102.herokuapp.com/oauth/twitter/callback'
	},
	google: {
		clientID: '558362708999-q7ojpb4te8ldft7p8hv7gm1leakjksk5.apps.googleusercontent.com',
		clientSecret: '0Zj0Y2fJL8ykL9FeuDZphCQn',
		callbackURL: 'https://still-forest-70102.herokuapp.com/oauth/google/callback'
	}
};
