/**
 * Created by Administrator on 2016/6/24.
 */
var app = angular.module('directiveApp',[]);

//注射器加载完所有模块时，此方法执行一次
app.run(function($templateCache){
    $templateCache.put('hhj.html',"<div> hello angular directive templateCache </div>")
});

app.directive('hello',function(){
    return {
        restrict:'AEMC',
        template:'<div> hello angular directive </div>',
        replace:true
    }
});

app.directive('cache',function($templateCache){
    return {
        restrict:'AEMC',
        template: $templateCache.get('hhj.html'),
        replace:true
    }
});

app.directive('clude',function(){
    return {
        restrict: 'AEMC',
        transclude:true,
        template: "<div>hello angular transclude <span ng-transclude></span> </div>"
    }
});

app.directive('temp',function(){
    return {
        restrict:'AEMC',
        templateUrl:'../../dom/dem/1.html',
        replace:true
    }
});