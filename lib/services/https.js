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
var Service = require("./http.js"),
	util    = require('util');

/**
 * @constructor
 */
function HTTPSService() {
	Service.call(this);
}
util.inherits(HTTPSService, Service);