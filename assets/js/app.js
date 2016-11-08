/*
  Controller
  The app.js is going to be our primary controller as well as instantiate our angular module. 
  Also, we need to include a method for retrieving all the todos (on page load), adding and remove a todo.
 */

'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap'])
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {                  // path
      templateUrl: '/templates/todo.html',      // route {object}
      controller: 'TodoCtrl'    
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }])

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {    // define controller
  $scope.formData = {};
  $scope.todos = [];

  TodoService.getTodos().then(function(response) {
    console.log("Response: " + response);
    $scope.todos = response;
  })

  $scope.addTodo = function() {
    console.log("addTodo: " + $scope.formData);
    TodoService.addTodo($scope.formData).then(function(response) {
      console.log("Response: " + response);
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    })
  }

  $scope.removeTodo = function(todo) {
    console.log(todo);
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
      console.log(response);
    })
  }
}])
