    'use strict';

    angular.module('standard', [
        // 'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute'
        ])
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'cssStandardCtrl',
                    templateUrl: 'partial/cssStandard.html'

                })
                .when('/cssStandard', {
                    controller: 'cssStandardCtrl',
                    templateUrl: 'partial/cssStandard.html'
                })
                .when('/htmlStandard', {
                    controller: 'htmlStandardCtrl',
                    templateUrl: 'partial/htmlStandard.html'
                })
                .when('/jsStandard', {
                    controller: 'jsStandardCtrl',
                    templateUrl: 'partial/jsStandard.html'
                })
                .otherwise({
                    redirectTo: '/'
                });               
        }])
        .run(function(){
            console.log('Welcom to use our standards!');
        });

