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
var mongoose      = require('mongoose'),
	async         = require('async'),
	logger        = require('winston'),
	PriorityQueue = require('priorityqueuejs'),
	services      = require('./services/');

/**
 * Export the scheduler
 */
exports = module.exports = Monitor;

/**
 * @constructor
 */
function Monitor() {
	/**
	 * Create a queue object
	 */
	this.q = new PriorityQueue();

	/**
	 * Fetch the Mongoose Model object for the Monitors
	 */
	this.model = mongoose.model("Monitor");

	/**
	 * Maximum queue size
	 * @type {Number}
	 */
	this._max_q_size = 20;

	/**
	 * A pointer for tracking the queue populater timeout.
	 */
	this._q_populate_id = null;

	/**
	 * How often should we populate the queue
	 * @type {Number}
	 */
	this._q_populate_interval = 100;

	/**
	 * A pointer for tracking the queue processor timeout.
	 */
	this._q_processor_id = null;

	/**
	 * How often should we process the queue
	 * @type {Number}
	 */
	this._q_processor_interval = 50;
}

/**
 * Compare to objects from mongo and check to see which one is a priority
 * @param  {*} a Object 1
 * @param  {*} b Object 2
 * @return {Number}
 */
Monitor._COMPARATOR = function(a, b) {
	return 0;
}

/**
 * start()
 */
Monitor.prototype.start = function() {
	/**
	 * Validate that no timeouts are running
	 */
	if(this._q_processor_id !== null || this._q_populate_id !== null)
	{
		throw new Error("Queue is already running");
	}

	/**
	 * Begin the populate handler
	 */
	this._q_processor_id = setTimeout(this._process.bind(this), this._q_processor_interval);

	/**
	 * Begin the populate handler
	 */
	this._q_populate_id = setTimeout(this._populate.bind(this), this._q_populate_interval);
}

/**
 * Process item's in the queue
 */
Monitor.prototype._process = function() {
	/**
	 * Check to see if we have items that require processing
	 */
	if(this.q.size() === 0)
	{
		logger.info("empty queue");
		this._q_processor_id = setTimeout(this._process.bind(this), this._q_processor_interval);
		return;
	}

	logger.info("Processing queue: " + this.q.size());
};

/**
 * Populate the queue
 */
Monitor.prototype._populate = function() {
	/**
	 * First we need to figure out if we have any slots available within the queue.
	 */
	if(this.q.size() >= this._max_q_size)
	{
		/**
		 * The queue is full
		 */
		logger.info("Queue is currently full.");
		this._q_populate_id = setTimeout(this._populate.bind(this), this._q_populate_interval);
		return;
	}

	/**
	 * Check have many slots we have available
	 */
	var space = this._max_q_size - this.q.size();

	/**
	 * 
	 */
	this.model.find({}).limit(space).exec(function(err, results){
		logger.info("results");
	});
}