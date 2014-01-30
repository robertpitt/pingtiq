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
var mongoose = require("mongoose"),
	Schema   = mongoose.Schema;

/**
 * Declare Schema.
 */
var Alerts = new Schema({

});

/**
 * Export to mongoose
 */
mongoose.model('Alerts', Alerts);