angular.module("mainModule",[])
   .filter("removeHtml", function(){
   	   return function(text){
            return String(text).replace(/<[^>]+>/gm,'');
   	   }
   })
   .controller("FiltersController", function($scope){
        $scope.my_html="<p>Hola mundo</p>"
   });