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
var	mongoose  = require("mongoose"),
	Schema    = mongoose.Schema,
	Monitor   = require("./monitor.js");
	//Monitor   = mongoose.model("Monitor")

/**
 * Hostname Schema, used as a top-level object
 */
var Hosts = new Schema({
	ip          : {type: String, required: true, index: true},
	name        : {type: String, required: true, trim: true, index: true},
	description : {type: String, required: false,trim: true},
	created     : {type: Date, default: Date.now},
	monitors    : [Monitor]
});

/**
 * Export to mongoose
 */
mongoose.model('Hosts', Hosts);