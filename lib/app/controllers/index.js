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
var logger = require("winston")
	fs     = require('fs');

/**
 * Export the initializer function
 */
exports = module.exports = function(app) {

	/**
	 * Recursive scanner for controller maps
	 */
	var _map = function(dir, app) {
		var stat;

		/**
		 * Read the current directory
		 * @todo Support index.js
		 */
		fs.readdirSync(dir).forEach(function(file){
			//Do not load this file again
			if((__dirname + "/" + file) == __filename) return;

			//Get the absolute path
			var entity = dir + "/" + file;

			//Fetch the stat for the entity
			stat = fs.statSync(entity);

			// If we are a directory, do an inner scann
			if (stat && stat.isDirectory()) {
				_map(entity, app);
			}else {
				route = entity.replace(__dirname, "").replace(".js", "");

				/**
				 * If the route is index.js, remove the .js
				 */
				if(file.slice(file.length - 8, file.length) == "index.js") {
					route = route.slice(0, -8);
				}

				/**
				 * Remove the .js
				 */

				//Load
				require(entity)(app, route);
			}
		});
	}

	//Map the schema
	_map(__dirname, app);
}