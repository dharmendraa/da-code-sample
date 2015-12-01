/** Created By - Dharmendra Ahirwar
	Date - 29 November 2015
	Version - 1.0.0.0
*/
var daApp = angular.module('daCSApp',['ngRoute']);

daApp.controller('daHeadingControl', function($scope){
	$scope.headingTitle = "Code Sample";
	$scope.headingSubTitle = "By Dharmendra Ahirwar";
});

daApp.controller('daNavControl',function($scope){
	$scope.ngnavData = [
	{navText:'To Do List', navLink:'#/todolist'}
	];
	
	$scope.jqnavData = [
	{navText:'Sliding Puzzle', navLink:'#/slidingpuzzle'}
	];
	
	$scope.ngnavLink = $scope.ngnavData.navLink;
	$scope.jqnavLink = $scope.jqnavData.navLink;
});

daApp.controller('daFooter',function($scope){
	$scope.copyrightText = "DA-Code Sample maintained by";
	$scope.copyrightLinkText = "Dharmendraa";
	$scope.copyrightLink = "https://github.com/dharmendraa";
	$scope.PublishedText = "Published with";
	$scope.PublishedLinkText = "GitHub Pages";
	$scope.PublishedLink = "https://pages.github.com";
	
});

daApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/todolist', {
			templateUrl: 'tpl/ng-todolist.html',
			controller: 'daNavControl'
		}).
		when('/slidingpuzzle', {
			templateUrl: 'tpl/slidingpuzzle.html',
			controller: 'daNavControl'
		}).
		otherwise({
			templateUrl: 'tpl/home.html',
			redirectTo: '/home'
	});
}]);

daApp.controller('toDoListCtrl', function($scope){
	$scope.title = "To Do List";
	
	$scope.listArray = [];
	
	$scope.filter = "all";
	
	$scope.addToList = function(){
		if($scope.inpList!="" && $scope.inpList!=null && $scope.inpList!=undefined){
			$scope.listArray.push({id:'id_'+(new Date).getTime(),name:$scope.inpList,completed:false});
		}
		$scope.inpList = "";
	}
	
	$scope.removeItem = function(index){
		$scope.listArray.splice(index,1)
	}
	
	$scope.chkAllCompleted = function(){
		var count = 0;
		angular.forEach($scope.listArray, function(item){
			if(item.completed)
			count ++;
		})
		return count;
	}
});