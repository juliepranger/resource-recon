'use strict';

/**
 * ResourceRecon namespace
 */
var ResourceRecon = ResourceRecon || {};

/**
 * ResourceRecon.controllers namespace
 */
ResourceRecon.controllers = ResourceRecon.controllers || {};



/**
 * Manages the navigation functionality
 * @param {ResourceRecon.services.API} API service.
 * @param {angular.$window} $window module
 * @constructor
 * @ngInject
 **/
ResourceRecon.controllers.MainController = function(API, $window) {
    var self = this;
    this.API = API;
    this.$window = $window;
    // // Client ID and API key from the Developer Console
    // this.CLIENT_ID = '878857386174-qcin6kdro9e6d7t9og6nee3afgg2qaji.apps.googleusercontent.com';
    //
    // // Array of API discovery doc URLs for APIs used by the quickstart
    // this.DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    //
    // // Authorization scopes required by the API; multiple scopes can be
    // // included, separated by spaces.
    // this.SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

    this.harvestData = {};
    this.forecastData = {};

    this.getHarvestData();
    this.getForecastData();
};

module.exports = ResourceRecon.controllers.MainController;


ResourceRecon.controllers.MainController.prototype.getHarvestData = function() {
    this.API.getHarvestData().then(function(response) {
        console.log('response: ', response.data);
        this.harvestData = response.data;
    }.bind(this));
};


ResourceRecon.controllers.MainController.prototype.getForecastData = function() {
    this.API.getForecastData().then(function(response) {
        console.log('response: ', response.data);
        this.forecastData = response.data;
    }.bind(this));
};
