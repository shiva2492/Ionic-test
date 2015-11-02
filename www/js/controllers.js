angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('ItemlistsCtrl', function($scope) {
  $scope.itemlists = [
    { title: 'GROCERY', id: 1 },
    { title: 'FRUITS & VEGETABLE', id: 2 },
    { title: 'BRANDED FOODS', id: 3 },
    { title: 'FLOUR', id: 4 },
    { title: 'BEVERAGES', id: 5 },
    { title: 'OTHERS', id: 6 }
  ];
  
 
})

.controller('ItemlistCtrl', function($scope, $stateParams) {
    $scope.addItem= function(){
	$scope.itemlist.push({title:'addItem'})
  }
})

.controller('LoginCtrl', function($scope, $state) {
  
  $scope.LogIn = function(user) {
    $state.go('app.itemlists');
  };
  
});