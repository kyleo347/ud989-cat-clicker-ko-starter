var Cat = function (name,image,nicknames) {
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.level = "Baby";
    this.nicknames = nicknames;
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.current = {};
    $scope.cats = [ new Cat("Rupert","../img/22252709_010df3379e_z.jpg",["Rob","Bob","Bobert"]),
        new Cat("Cornelius","../img/434164568_fea0ad4013_z.jpg", ["Cornwallis","Popcorn", "Pooper"])];
    
    $scope.setCurrent = function(name){
        for( i in $scope.cats){
            if($scope.cats[i].name === name){
                $scope.current = $scope.cats[i];
                return;
            }
        }
    }
    
    $scope.increment = function(){
        if ($scope.current.clicks !== undefined){
            $scope.current.clicks ++;
            if ($scope.current.clicks > 5 && $scope.current.clicks <= 10){
                $scope.current.level = "Teen";
            } else if ($scope.current.clicks > 10  && $scope.current.clicks <= 20) {
                $scope.current.level = "Grownup";
            } else if ($scope.current.clicks > 20){
                $scope.current.level = "Grandpa";
            }
        }
    }
});

