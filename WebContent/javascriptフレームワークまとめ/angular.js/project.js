// [a] - projectモジュールを定義。依存モジュールとしてngRouteおよびfirebaseを追加
angular.module('project', ['ngRoute', 'firebase'])

// [b] - firebaseサービスのURLを登録し、fbURLでアクセス可能にします。
// ※ここは自分で登録したFirebaseのURLに差し替えてください
.value('fbURL', 'https://intense-fire-xxxx.firebaseio.com/angularSample3/')

// [c] Firebaseサービスのインスタンスを返す関数を登録
.factory('Projects', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
})

// [d] ngRouteモジュールの設定
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
    .when('/edit/:projectId', {
      controller:'EditCtrl',
      templateUrl:'detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

// [e] 以降、各コントローラの挙動を定義

.controller('ListCtrl', function($scope, Projects) {
  $scope.projects = Projects;
})

.controller('CreateCtrl', function($scope, $location, $timeout, Projects) {
  $scope.save = function() {
    Projects.$add($scope.project, function() {
      $timeout(function() { $location.path('/'); });
    })
    $location.path('/');
  };
})

.controller('EditCtrl', function($scope, $location, $routeParams, $firebase, fbURL) {
  var projectUrl = fbURL + $routeParams.projectId;
  $scope.project = $firebase(new Firebase(projectUrl));

  $scope.destroy = function() {
    $scope.project.$remove();
    $location.path('/');
  };

  $scope.save = function() {
    $scope.project.$save();
    $location.path('/');
  };
});