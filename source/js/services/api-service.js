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
 * API Service
 * @param {!angular.$http} $http Angular $http Module.
 * @constructor
 * @ngInject
 */
ResourceRecon.services.API = function($http) {
  this.$http = $http;
};


/**
 * class export
 */
module.exports = ResourceRecon.services.API;


/**
 * Gets Harvest Data
 * @return {object}
 */
ResourceRecon.services.API.prototype.getHarvestData = function() {
  return this.$http.get('static/data/harvest-data.json');
};



/**
 * Gets Harvest Data
 * @return {object}
 */
ResourceRecon.services.API.prototype.getForecastData = function() {
  return this.$http.get('static/data/forecast-data.json');
};
