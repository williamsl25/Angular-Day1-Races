(function (){
  "use strict";

  angular
    .module('races', [
    'ngRoute'
  ])
  .config(function ($routeProvider){
    $routeProvider
    //root route
      .when('/', {
        template: '<h1>Home Page</h1><button ng-click="alertMe()">alert me</button>{{msg}}',
        controller: 'MainController'
      })
      //all races list
      .when('/races', {
        templateUrl: 'views/races/list.html',
        controller: 'RacesController'
      })
      //indiv race page
      .when('/races/:raceId', {
        templateUrl: 'views/races/show.html',
        controller: 'RacesController'
      })
      //edit race
      .when('/races/:raceId/edit', {
        templateUrl: 'views/races/edit.html',
        controller: 'RacesController'
      })
      //addrace
      .when('/addRace', {
        templateUrl: 'views/races/create.html',
        controller: 'RacesController'
      })
      //error
      .when('/404', {

      })
      .otherwise({ reirectTo: '/404'})
  });

})();
