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
	Schema    = mongoose.Schema;

/**
 * Declare Schema.
 */
var Statistic = new Schema({
	type    : {type: String, default: "count", enum: ["binary", "count"]},
	created : {type: Date, default : Date.now},
	key     : {type: String, required: true},
	value   : {type: Number, required: true}
});

/**
 * Export to mongoose
 */
exports = module.exports = mongoose.model('Statistic', Statistic);