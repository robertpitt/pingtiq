/**
 * Pingtiq - A fully fetured service monitior
 *
 * 
 * @description A fully fetured service monitior
 * @author Robert Pitt <rpitt@centiq.co.uk>
 * @package pingtiq
 * @license GPL
 */

/**
 * Require dependancies
 */
var express      = require("express"),
	app          = express(),
	logger       = require("winston"),
	mongoose     = require("mongoose"),
	configdb     = require("./configs/mongodb.js"),
	configserver = require("./configs/server.js"),
	apppath      = __dirname + "/app";

/**
 * Attempt to connect to the database
 */
mongoose.connect(configdb.uri || null, configdb.options || {}, function(err){	
	if(err) logger.error("Unable to connect to MongoDB: " + err.message) || process.exit();
});

/**
 * Default configuration for application.
 */
app.configure(function(){
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/app/static'));
});

/**
 * Development
 */
app.configure("development", function(){
	app.use(express.logger('dev'));
});

/**
 * Production
 */
app.configure("production", function(){

});

/**
 * Bootstrap the models
 */
require(apppath + "/models");

/**
 * Bootstrap controllers
 */
require(apppath + "/controllers/index.js")(app);

/**
 * If we are a standalone app, start the server
 */
if(!module.parent) {
	app.listen(configserver.port || 8080, function(){
		/**
		 * Start the scheduler.
		 */
		logger.info("Application server listening.");
	});
}

/**
 * Export the module.
 */
exports = module.exports = app;