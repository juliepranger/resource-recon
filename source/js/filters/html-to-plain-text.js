'use strict';

var ResourceRecon = ResourceRecon || {};
ResourceRecon.filters = ResourceRecon.filters || {};

/**
 * Filter for removing HTML tags from text.
 * @return {string} String with HTML stripped out.
 * @constructor
 * @ngInject
 **/
ResourceRecon.filters.HtmlToPlainText = function() {
  return function(text) {
     return text ? String(text).replace(/<[^>]+>/gm, '') : '';
   };
}

/** class exports */
module.exports = ResourceRecon.filters.HtmlToPlainText;
