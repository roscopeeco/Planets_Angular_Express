(function() {
    'use strict';

    angular.module('planets')
        .config(
            function($routeProvider) {
              var resolvePlanets = {
                planets: function (planetsService) {
                  return planetsService.getPlanets();
                }
              };

              $routeProvider
                .when(
                    '/',
                    {
                      controller:'PlanetListController',
                      controllerAs:'planetList',
                      templateUrl:'templates/app/planetlist.html',
                      resolve: resolvePlanets

                    }
                )
                .otherwise(
                    {
                        redirectTo:'/'
                    }
                );
            }
        );

})();
