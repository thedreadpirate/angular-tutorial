window.angular.module('ngff.directives', ['ngff.services.nfl'])
  .directive('positions', function() {
    return {
      restrict: "E",
      templateUrl: "views/players/positionselect.html"
    };
  })
  .directive('nflteams', function() {
	  return {
	    restrict: "E",
	    templateUrl: "views/players/nflteamselect.html"
	  };
	})
	.directive('searchlimit', function() {
	  return {
	    restrict: "E",
	    templateUrl: "views/players/searchlimitselect.html"
	  };
	})