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

/**
 * Export 
 */
exports = module.exports = Service;

/**
 * Base service class
 * @constructor
 */
function Service(domain) {
	/**
	 * Store hte domain
	 * @type {String}
	 */
	this.domain = domain;

	/**
	 * Statistic tracking
	 */
	this._statistics = [];
}

/**
 * Return the domain
 * @return String
 */
Service.prototype.getDomain = function() {
	return this.domain;
};

/**
 * Execute method
 */
Service.prototype.execute = function(callback) {
	throw new Error("Service does not have execute method implemented");
};