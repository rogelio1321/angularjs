var app =angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(a){
	a.name="Rogelio";
	a.newComment={};
	a.comments=[
	{
       comment: "hola xdxdd",
       username: "rogelio1321"
	},
	{
      comment: "adios xdxdd",
      username: "micachuela123"
	}
	];
	a.addComment=function(){
		a.comments.push(a.newComment);
		a.newComment={};
	}

}]);