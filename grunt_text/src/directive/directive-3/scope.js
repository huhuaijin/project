/**
 * Created by Administrator on 2016/6/24.
 */
var myApp = angular.module('myApp',[]);
myApp.controller('myScope',function($scope){
   $scope.tit = "english";
});
//@绑定 传递字符串
myApp.directive('hello',function(){
   return {
       restrict:'AEMC',
       scope:{ flover: '@' },
       template:'<div>{{flover}}</div>',
       /*link:function(scope,element,attrs){
           scope.flover = attrs.flover;
       }*/
   }
});

//=绑定 双向数据绑定
myApp.controller('ScopeEqual',function($scope){
    $scope.titl = "scope equal";
});
myApp.directive('equal',function(){
   return {
       restrict:'AEMC',
       scope:{ flover: '=' },
       template:'<div> <input type="text" ng-model="flover"/> </div>'
   }
});

//&绑定 调用controller里的方法
myApp.controller('ScopeAdd',function($scope){
    $scope.addScope = function(name){
        alert( 'hello' + name )
    }
});
myApp.directive('add', function(){
    return {
        restrict: 'AEMC',
        scope: {greet: '&' },
        template:'<div><input type="text" ng-model="username"/></div> <div> <button class="btn btn-info" ng-click="greet({name: username})">submit</button> </div>'
    }
});