'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/instructions.html'
      })
      .state('brick', {
        url: '/bricks/:color',
        templateUrl: 'views/bricks.html',
        controllerProvider: function($stateParams) {
          var color = $stateParams.color;
          color = color[0].toUpperCase() + color.slice(1);
          var ctrName = color + 'BricksCtrl';
          console.log(ctrName);
          return ctrName;
        },
        controllerAs: 'brick'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('brick.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
  }]);
