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
 * Require modules
 */
var logger = require("winston");

/**
 * Export the init function
 * @param  {App} app  Express Application
 * @param  {String} base URI base for this route, such as /api/monitors
 */
exports = module.exports = function(app, base) {
	console.log(base);
	/**
	 * Register montiors listing method
	 */
	app.get(base, function(req, res, next){
		res.send("Hello World");
	});
}