/**
 * Created by Administrator on 2016/6/17.
 */
app.controller('btTable',function($scope){
    $scope.firstname='huhuaijin';
    $scope.lastname="huhuhu";
    $scope.names = [{edit:'abc1',firstname:'张三',lastname:'张小三'},{edit:'bcd2',firstname:'李四',lastname:'李小四'},{edit:'bcd3',firstname:'王五',lastname:'王小五'},{edit:'bcd4',firstname:'小白',lastname:'小小白'}]
    $scope.error = false;
    $scope.incomplete = false;
});
routeApp.controller('routeConfig1',function($scope){
     $scope.$route=$route;
});
routeApp.controller('routeConfig2',function($scope){
    $scope.$route=$route;
});
routeApp.config(function($routeProvider){
    $routeProvider
        .when('/home',{templateUrl:'embedded.home.html',controller:'routeConfig1'})
        .when('/about',{ templateUrl:'embedded.about.html',controller:'routeConfig2'})
        .otherwise({redirectTo:'/home'})

});