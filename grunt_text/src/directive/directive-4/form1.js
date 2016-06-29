/**
 * Created by Administrator on 2016/6/24.
 */
var formModule = angular.module('formModule',[]);
formModule.controller('form1',function($scope){
    $scope.user = {
        name:'xxj'
    };
    $scope.save = function(){
        alert('保存成功');
    }
});


//定制表单 custom form
formModule.controller('form2',function($scope){

});
formModule.directive('contenteditable',function(){
    return {
        require : 'ngModel',
        link: function(scope,elm,attrs,ctrl){
            // view --> model
            elm.bind('keyup',function(){
                scope.$apply(function(){
                    ctrl.$setViewValue(elm.text());
                });
            });

            // model --> view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue)
            };

            // init DOM value
            ctrl.$setViewValue(elm.html());
        }
    }
});


//表单验证
formModule.controller('form3',function($scope){
    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);
        //打印的所有表单的值
        console.log('表单提交的所有内容');
        console.log(user);
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.master);
    };

    $scope.reset();

});










