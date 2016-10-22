 (function() {


   angular.module('intro', [])
       .controller('MainController', MainController);

     MainController.$inject = ['$scope'];//what tools the Maincontroller function need

   function MainController($scope){ // $scope is our bridge to the dom
      console.log('Now Main Controlling..');
     $scope.person = 'Bob';
     $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
   }
 }());