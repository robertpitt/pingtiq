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
	Statistic = require('./statistic.js');

/**
 * Declare Schema.
 */
var Monitor = new Schema({
	name        : {type: String, required: true,  trim: true, index: true},
	description : {type: String, required: false, trim: true},
	type        : {type: String, required: true},
	created     : {type: Date, default: Date.now},
	statistics  : [Statistic]
});

/**
 * Export to mongoose
 */
exports = module.exports = mongoose.model('Monitor', Monitor);