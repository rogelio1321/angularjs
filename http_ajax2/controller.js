angular.module("MyFirstApp",[])
.controller("FirstController",function($scope,$http){
	$scope.posts = [];
	$scope.newPost={};
	$http.get("https://jsonplaceholder.typicode.com/posts")
	    .then(function(data){
            console.log(data);
            $scope.posts = data.data;﻿
	    });
	    
	$scope.addPost=function(){
		$http.post("https://jsonplaceholder.typicode.com/posts",{
			title:   $scope.newPost.title,
			body:    $scope.newPost.body,
			userId: 1
		})
		.then(function(data,status,headers,config){
			
			$scope.posts.push($scope.newPost);
			$scope.newPost={};

	})
	}

});