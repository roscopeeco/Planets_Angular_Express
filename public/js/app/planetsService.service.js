
(function() {
    'use strict';

    angular.module('planets')
        .service(
    		'planetsService',
    		function($http, $q) {

    			function getPlanets() {

    				var request = $http(
    					 {
    						 method: "get",
    						 url: "api/planets"
    					 }
       				 );
       				 return( request.then( getSuccess, getError ) );
    			 }

    			 function getSuccess( response ) {
    				/* items= response.data.items;*/
    				  return( response.data.items );
    			 }

    			 function getError( response ) {
    				 if ( ! angular.isObject( response.data ) || ! response.data.message ) {
    					 return( $q.reject( "An unknown error occurred." ) );
    				 }
    				 // Otherwise, use expected error message.
    				 return( $q.reject( response.data.message ) );
    			 }

    			 return( { getPlanets: getPlanets } );

    	    }
    	);

})();
