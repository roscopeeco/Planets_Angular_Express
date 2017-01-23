(function() {
    'use strict';

    angular.module('planets')
        .config(
            [
                '$locationProvider',
                function($locationProvider) {
                    $locationProvider.hashPrefix('');
                }
            ]
        );

})();
