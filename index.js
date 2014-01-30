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
 * Load the pingit application
 */
var logger   = require('winston'),
	frontend = require("./lib/frontend.js"),
	monitor  = new (require("./lib/monitor.js"))();

/**
 * Listen on the app interface
 */
frontend.listen(8080, function(){
	logger.info("Frontend listing");
})
/**
 * Start the monitor
 */
monitor.start();