var app = angular.module('myapp', []);
app.controller('appcontroller', function($scope,$http) {
	$scope.orderByField = 'set_id';
	
  $scope.reverseSort = false;
   $http({
      method: 'GET',
      dataType: 'json',
      url: 'js/dashboard.json'
   }).success(function(response){ 
      $scope.dashboarddata=response;
    })
   $scope.editdata = function(user) {
      user.editMode = true;
      $scope.reverseSort = false;
    }

    $scope.savedata = function(user, index) {
      if (user.editMode) {
        user.editMode = false;
        usersSvc.updateUser(user, index)
          .then(function() {    
          }, function(response) {
            $scope.msg = response;
          });
      } else {
        usersSvc.createUser(user)
          .then(function() {
          }, function(response) {
            $scope.msg = response;
          });
      }
    }

   

});