'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', ['brickWarehouse', function (warehouse) {
    this.name = 'Lots O Bricks';
    this.redBricks = warehouse.bricks.Red;
    this.blueBricks = warehouse.bricks.Blue;
    this.greenBricks = warehouse.bricks.Green;
  }]);
