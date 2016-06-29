/**
 * Created by Administrator on 2016/6/21.
 */
var bookController = angular.module('bookController',[]);
var bookCtr1 = bookController.controller('bookCtr1',function($scope){
    $scope.pageClass="list";
    $scope.userInfo = {
        email:'huhuaijin@163.com',
        password:'huhuaijin',
        autoLogin:'true'
    };
    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData = function(){
        $scope.userInfo = {
            email:'1159279056@qq.com',
            password:'mxliyu',
            autoLogin:'false'
        }
    };
    $scope.resetData = function(){
        $scope.userInfo = {
            email:'huhuaijin@163.com',
            password:'huhuaijin',
            autoLogin:'true'
        };
    }

});
var bookCtr2 = bookController.controller('bookCtr2',function($scope){
    $scope.txt=[{name:'与时间共舞'},{name:'与时间赛跑'},{name:'课时一'},{name:'课时二'}];
    $scope.sho = true;
    $scope.hid = true;
    $scope.pageClass="list";
    $scope.btn = function(){
        if($scope.sho == true){
            $scope.sho = false;
            $scope.hid = false;
        }else{
            $scope.sho = true;
            $scope.hid = true;
        }
    }
});
var bookCtr3 = bookController.controller('bookCtr3',function($scope){
    $scope.iswarning = true;
    $scope.isdefault = true;
    $scope.pageClass="list";
    $scope.bgToggle = function(){
        $scope.iswarning = !$scope.iswarning;
    };
    $scope.panelToggle = function(){
        $scope.isdefault = !$scope.isdefault;
    }
});
var bookCss3 = bookController.controller('bookCss3',function($scope){
    $scope.pageClass = 'hello';
});
var bookCss30 = bookController.controller('bookCss30',function($scope){
    $scope.pageClass="list";
});













































