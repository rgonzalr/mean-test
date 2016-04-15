// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var	config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var urlMongo = process.env.MONGODB_URI || config.db;
	console.log(urlMongo);
	var db = mongoose.connect(urlMongo);

	// Load the 'User' model
	require('../app/models/user.server.model');

	// Return the Mongoose connection instance
	return db;
};
