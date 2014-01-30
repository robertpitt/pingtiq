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
var logger   = require("winston"),
	mongoose = require('mongoose');

/**
 * Load the model
 */
var model = mongoose.model("Monitor");

/**
 * Export the init function
 * @param  {App} app  Express Application
 * @param  {String} base URI base for this route, @see [description]uch as /api/monitors
 */
exports = module.exports = function(app, base) {
	/**
	 * Show available monitors within the storage engine
	 */
	app.get(base, function(req, res, next){
		model.find({}, function(err, results){
			res.send(results);
		});
	});

	/**
	 * Show a single monitor
	 */
	app.get(base + "/:id", function(req, res, next){
		model.findById(req.params.id, function(err, results){
			res.send(results);
		});
	});

	/**
	 * Update a monitor
	 */
	app.post(base + "/:id", function(req, res, next){
		model.update({_id : req.params.id}, req.body, function(err, success){
			res.send(err || true);
		});
	});

	/**
	 * Create a new resource
	 */
	app.put(base, function(req, res, next){
		model.create(req.body, function(err, entity){
			res.send(err || entity);
		})
	});

	/**
	 * Remove a monitor.
	 */
	app.delete(base + "/:id", function(req, res, next){
		model.findById(req.params.id).remove(function(err, success){
			res.send(err || !!success);
		})
	});
}