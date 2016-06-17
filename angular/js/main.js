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