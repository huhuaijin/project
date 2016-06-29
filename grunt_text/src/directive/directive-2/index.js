/**
 * Created by Administrator on 2016/6/24.
 */
var myApp = angular.module('myApp',[]);
myApp.controller('ctrl1',function($scope){
    $scope.date1 = function(){
        console.log('date1 reading...');
    }
});
myApp.controller('ctrl2',function($scope){
    $scope.date2 = function(){
        console.log('date2 ...')
    }
});
myApp.directive('hello',function(){
    return {
        restrict:'AEMC',
        link:function(scope,element,attrs){
            element.addClass('text-success');
            element.bind('mouseenter',function(){
                scope.$apply(attrs.lodedate);
            })
        }
    }
});
myApp.directive('superman',function(){
    return {
        scope:{},
        restrict:'AE',
        controller:function($scope){
            $scope.tim = ['add'];
            this.addStrong = function(){
                $scope.tim.push("strong1");
            };
            this.addSpeed = function(){
                $scope.tim.push("speed2");
            };
            this.addLight = function(){
                $scope.tim.push("light3");
            }
        },
        link:function(scope,element,attrs){
            element.addClass('btn btn-primary');
            element.bind('mouseenter',function(){
                console.log(scope.tim)
            })
        }
    }
});
myApp.directive('strong',function(){
    return {
        require:'^superman',
        link:function(scope,element,attrs,supperCtrl){
            supperCtrl.addStrong()
        }
    }
});
myApp.directive('speed',function(){
    return {
        require:'^superman',
        link:function(scope,element,attrs,supperCtrl){
            supperCtrl.addSpeed()
        }
    }
});
myApp.directive('light',function(){
    return {
        require:'^superman',
        link:function(scope,element,attrs,supperCtrl){
            supperCtrl.addLight()
        }
    }
});