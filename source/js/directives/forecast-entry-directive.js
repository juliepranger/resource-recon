'use strict';

/**
 * ResourceRecon namespace
 */
var ResourceRecon = ResourceRecon || {};

/**
 * ResourceRecon.directives namespace
 */
ResourceRecon.directives = ResourceRecon.directives || {};



/**
 * Directive used for handling multiple checkboxes in a form.
 * Reports to the FormboxForm.
 * @constructor
 * @ngInject
 **/
ResourceRecon.directives.forecastEntry = function() {
  return {
    template: 'Entry: <div>{[entry]}</div>'
  };
};

/**
 * class exports
 */
module.exports = ResourceRecon.directives.forecastEntry;
