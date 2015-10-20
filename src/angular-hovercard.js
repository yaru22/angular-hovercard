/* global angular */

'use strict';

angular.module('yaru22.hovercard', [
  'yaru22.hovercard.tmpls'
]).directive('hovercard', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'template/angular-hovercard.tmpl',
    scope: true,
  
    link: function($scope, $element, $attrs) {
      $scope.show = {};
      $scope.show.card = false;
      $scope.hoverTmplUrl = $attrs.hoverTmplUrl;
      $scope.onHoverIn = $scope.$eval($attrs.onHoverIn);
      $scope.onHoverOut = $scope.$eval($attrs.onHoverOut);
      var placement = $attrs.placement || 'bottomRight';

      $scope.hoverLabelStyle = {};
      if ($attrs.labelColor) {
        $scope.hoverLabelStyle.color = $attrs.labelColor;
      }

      $scope.hoverCardStyle = {};
      if ($attrs.background) {
        $scope.hoverCardStyle.background = $attrs.background;
      }
      if ($attrs.width) {
        $scope.hoverCardStyle.width = $attrs.width;
      }

      if (placement) {
        // Split placement string into two words:
        // e.g. bottomLeft -> ["bottom", "left"]
        var positionStrings = placement.replace(/([A-Z])/g, ' $1')
            .toLowerCase()
            .split(' ');
        var positionObj = {};
        positionObj[positionStrings[0]] = true;
        positionObj[positionStrings[1]] = true;

        if (positionObj.bottom) {
          $scope.hoverCardStyle.bottom = '';
          $scope.hoverCardStyle.top = '-1em';
          $scope.hoverCardStyle['padding-bottom'] = '';
          $scope.hoverCardStyle['padding-top'] = '3em';
        }
        if (positionObj.top) {
          $scope.hoverCardStyle.bottom = '-1em';
          $scope.hoverCardStyle.top = '';
          $scope.hoverCardStyle['padding-bottom'] = '3em';
          $scope.hoverCardStyle['padding-top'] = '';
        }
        if (positionObj.left) {
          $scope.hoverCardStyle.left = '';
          $scope.hoverCardStyle.right = '-1em';
        }
        if (positionObj.right) {
          $scope.hoverCardStyle.left = '-1em';
          $scope.hoverCardStyle.right = '';
        }
      }  // if (placement)

      var triggerEvent = 'mouseenter';
      if ($attrs.trigger) {
        triggerEvent = $attrs.trigger;  // click, hover, dblclick, etc
      }
      $element.on(triggerEvent, function() {
        $scope.showCard = true;
        if ($scope.onHoverIn) {
          $scope.onHoverIn();
        }
      });
      $element.on('mouseleave', function() {
        $scope.showCard = false;
        if ($scope.onHoverOut) {
          $scope.onHoverOut();
        }
      });

    }  // link function
  };
});
