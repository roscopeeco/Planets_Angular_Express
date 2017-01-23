(function() {
    'use strict';

    angular.module('planets')
        .controller(
            'PlanetListController',
            function($scope, $log, planetsService) {

             $scope.log = $log;
             $scope.log.log('startng controller');

              $scope.planets = [];
              $scope.loading = false;
              $scope.loaded = false;

                $scope.toggle=function(planet) {
                    planet.show=!planet.show;
                }

              function getPlanets() {

                 $scope.loading = true;

                 planetsService.getPlanets()
                     .then(
                         function( planets ) {

                             for (var i=0, ii=planets.length;i<ii;i++) {
                                 planets[i].show=false;
                             }

                             $scope.planets=planets;
                             $scope.log.log(planets.length);
                             $scope.loading = false;
                             $scope.loaded = true;
                         }
                     );
              }

              getPlanets();

            }
        );


})();
