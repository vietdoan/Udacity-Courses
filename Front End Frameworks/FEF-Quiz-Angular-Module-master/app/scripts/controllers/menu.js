'use strict';

/**
 * @ngdoc function
 * @name newModuleQuizApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the newModuleQuizApp
 */
angular.module('newModuleQuizApp')
  .controller('MenuCtrl', function () {
    this.id = 'strawberry-pudding';
    this.name = 'Strawberry Pudding';
    this.img = 'strawberry-pudding.jpg';
    this.rating = 5;
  });
