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
var Service = require("../service.js"),
	util    = require('util'),
	http    = require("http"),
	dns     = require("dns"),
	net     = require("net"),
	async   = require('async');

/**
 * Export the service
 */
exports = module.exports = HTTPService;

/**
 * @constructor
 */
function HTTPService(domain) {
	Service.call(this, domain);
}
util.inherits(HTTPService, Service);

/*
 * Execute the ping task
 */
HTTPService.prototype.execute = function(callback) {

	http.get({host: this.getDomain(),	port: 80, path: '/'}, function(res) {
		callback(null, true);
	}).on('error', function(e) {
		callback(new Error(e.code, e.errno));
	});
};