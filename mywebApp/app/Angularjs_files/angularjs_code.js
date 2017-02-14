/**
 * Created by Azeez GIS on 10-02-2017.
 */
var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.hideform=true;

    $scope.divHide=function(){

        if($scope.hideform==true)
        {$scope.hideform=false;}

        else {$scope.hideform=true;}
    }
});
