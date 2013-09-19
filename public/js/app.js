window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.fantasyTeams','ngff.controllers.header','ngff.controllers.index','ngff.controllers.leagues','ngff.controllers.nfl','ngff.controllers.players']);
window.angular.module('ngff.services', ['ngff.services.fantasyTeams','ngff.services.global','ngff.services.leagues','ngff.services.nfl','ngff.services.players']);