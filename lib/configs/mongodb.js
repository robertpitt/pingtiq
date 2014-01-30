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
 * Create root namespace for configuration
 */
exports = module.exports = {};

/**
 * Connection Sets
 */
exports.uri = [
	"mongodb://localhost/pingtiq1"
].join(",")

/**
 * Connection Options object
 */
exports.options = {
	server: { poolSize: 5 }
};