'use strict';

/**
 * @ngdoc overview
 * @name storefrontApp
 * @description
 * # storefrontApp
 *
 * Main module of the application.
 */
angular
  .module('storefrontApp', [
    'ui.router',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
             url: '/about',
             templateUrl: 'views/about.html',
             controller: 'AboutCtrl',
             controllerAs: 'about'
            // we'll get to this in a bit       
        });
    
  });
