'use strict';

/**
 * ResourceRecon namespace
 */
var ResourceRecon = ResourceRecon || {};

/**
 * ResourceRecon.services namespace
 */
ResourceRecon.services = ResourceRecon.services || {};



/**
 * @constructor
 * @param {!angular.$window} $window module.
 * @ngInject
 **/
ResourceRecon.services.Analytics = function($window) {
  this.$window = $window;
};


/**
 * @constructor
 * @param {!angular.$window} $window module.
 **/
ResourceRecon.services.Analytics.prototype.trackEvent = function(category, action, label) {
  this.$window.ga('send', 'event', category, action, label)
};

/**
 * class export
 */
module.exports = ResourceRecon.services.Analytics;
