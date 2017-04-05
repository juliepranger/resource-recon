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
ResourceRecon.directives.Checklist = function() {
  return {
    scope: {
      list: '=checklist',
      value: '@'
    },
    require: '^form',
    link: function(scope, elem, attrs, ctrl) {
      var handler = function(setup) {
        var checked = elem.prop('checked');
        var index = scope.list.indexOf(scope.value);
        if (checked && index == -1) {
          if (setup) elem.prop('checked', false);
          else scope.list.push(scope.value);
        } else if (!checked && index != -1) {
          if (setup) elem.prop('checked', true);
          else scope.list.splice(index, 1);
        }
      };

      var setupHandler = handler.bind(null, true);
      var changeHandler = handler.bind(null, false);

      elem.bind('change', function() {
        scope.$apply(changeHandler);
      });
      scope.$watch('list', setupHandler, true);
    }
  };
};

/**
 * class exports
 */
module.exports = ResourceRecon.directives.Checklist;
