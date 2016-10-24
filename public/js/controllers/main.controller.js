(function () {

  angular.module('intro') //getter syntax --> start
  .controller('MainController', MainController);
  MainController.$inject = ['$scope'];//what tools the Maincontroller function need

   function MainController($scope){ // $scope is our bridge to the dom
      console.log('Now Main Controlling..');
     $scope.person = 'TIAGO';
     $scope.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
     $scope.saySurprise = saySurprise;

     function saySurprise(person){
        //$scope.person = 1; // don't do this
       alert('Hey '+ person + '.. there is a clown behind you!');
     }

}
}());