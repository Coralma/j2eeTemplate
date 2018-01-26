'use strict';
angular.module('evcApp', ['ui.router','ui.bootstrap', 'restangular','ng-bootstrap-grid'
    ,'sample.controller','vehicleType.controller','part.controller','laborHour.controller','material.controller'])
    .config(function ($stateProvider, $urlRouterProvider,RestangularProvider) {
        RestangularProvider.setBaseUrl('/evc');
        $stateProvider
            .state('sample', {
                url: '/sample',
                controller: 'SampleCtrl',
                templateUrl: 'app/sample/sample.html'
            })
            .state('sample.vehicleType', {
                url: '/vehicleType',
                controller:'vehicleType.controller',
                templateUrl: 'app/sample/vehicleType.html'
            })
            /*.state('sample.default',{
                url:'',
                views: {
                    'vehicleType': {
                        templateUrl: 'app/sample/vehicleType.html',
                        controller:'vehicleType.controller'
                    },
                    'part': {
                        templateUrl: 'app/sample/part.html',
                        controller:'part.controller'
                    },
                    'laborHour': {
                        templateUrl: 'app/sample/laborHour.html',
                        controller:'laborHour.controller'
                    },
                    'material': {
                        templateUrl: 'app/sample/material.html',
                        controller:'material.controller'
                    }
                }
            })*/;
        $urlRouterProvider.otherwise('/sample');
    });