var app =angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
	$scope.name="Rogelio";
	$scope.newComment={};
	$scope.comments=[
	{
       comment: "hola xdxdd",
       username: "rogelio1321"
	},
	{
      comment: "adios xdxdd",
      username: "micachuela123"
	}
	];
	$scope.addComment=function(){
		$scope.comments.push($scope.newComment);
		$scope.newComment={};
	}

});