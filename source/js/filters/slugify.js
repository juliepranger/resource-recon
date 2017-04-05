'use strict';

/**
 * ResourceRecon namespace
 */
var ResourceRecon = ResourceRecon || {};

/**
 * ResourceRecon.filters namespace
 */
ResourceRecon.filters = ResourceRecon.filters || {};



/**
 * Filter for creating slugs in templates
 * @param {!ResourceRecon.services.Slug} Slug service.
 * @return {string} slugified string.
 * @constructor
 * @ngInject
 **/
ResourceRecon.filters.Slugify = function(Slug) {
  return function(input) {
    return Slug.slugify(input);
  };
};

/**
 * class exports
 */
module.exports = ResourceRecon.filters.Slugify;
