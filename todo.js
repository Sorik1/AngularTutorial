angular.module('todoApp', [])
.controller('TodoListController', function($scope){

	

	$scope.todos = [
	];

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}

	$scope.getDoneTodos = function() {
		return todosDone = _.filter($scope.todos, function(todo)  {return todo.done;}).length;
	};

	$scope.addTodo = function() {
		if ($scope.formTodoText != "" && $scope.formTodoText != null) {
			$scope.todos.push({text: $scope.formTodoText, done:false});
			$scope.formTodoText = "";
		}
	};

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		})

	};

	$scope.reorderArray = function() {
		$scope.todos = _.union(
			_.filter($scope.todos, function(todo) {
				return !todo.done;
			}),
			_.filter($scope.todos, function(todo)  {
				return todo.done;}
			)
		)
	}

});