/**
 * Created by Administrator on 2016/6/21.
 */
var appName1 = app.controller('appName1',function($scope,$rootScope){
    $rootScope.tem = 'huhuaijin';
    $scope.tim=[{name:'第三'},{name:'李四'},{name:'王五'}];
    $scope.name = function(){
        alert('app name1');
    }
});

var appName2 = app.controller('appName2',function($scope){
    $scope.names = function(){
        alert('app name2');
    }
});
appName2.directive('hello',function(){
    return{
        restrict:'E',
        template:'<h2>directive hello</h2>',
        replace:true
    }
});

var appName = app.controller('appName',function($scope){
    $scope.count = 0;
    $scope.$on('numAdd',function(){
        $scope.count++;
    })
});