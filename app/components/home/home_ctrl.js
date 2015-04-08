SimpleApp.controller('HomeCtrl', ['$scope', 'Api', function ($scope, Api) {
  $scope.loading = true;
  $scope.users = [];


  //////////////////////////////////////////////////////////////////////////////////
  //
  // event listeners
  //
  //////////////////////////////////////////////////////////////////////////////////

  // define users request
  $scope.search = function (name) {
    console.log('searching')
    Api.users.read({
      q : name
    }, function (result) {
      $scope.users = result.users;
      $scope.loading = false;
    });
  }

  //////////////////////////////////////////////////////////////////////////////////
  //
  // init
  //
  //////////////////////////////////////////////////////////////////////////////////


  // invoke user request
  $scope.search();
}]);