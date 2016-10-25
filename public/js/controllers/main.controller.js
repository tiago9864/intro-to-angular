(function () {

  angular.module('intro') //getter syntax --> start
  .controller('MainController', MainController);
  MainController.$inject = ['$scope', 'TodoService'];//what tools the Maincontroller function need

   function MainController($scope, TodoService){ // $scope is our bridge to the dom
     $scope.todos = TodoService.get();
     $scope.createTodo = createTodo;
     $scope.deleteTodo = deleteTodo;

     function createTodo(newTodo){
       TodoService.create(newTodo);
       $scope.newTodo = '';
     }
     function deleteTodo(index) {
        TodoService.delete(index);
     }

}
}());