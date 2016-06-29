/**
 * Created by Administrator on 2016/6/21.
 */
var app = angular.module('myApp',[]);
var first = angular.module('myFirst',['ngRoute','ngAnimate','bookController','bookService','bookDirective','bookFilter']);

first.config(function($routeProvider){
    $routeProvider.when('/hello',{
        templateUrl:'dom/a.html',
        controller:'bookCtr1'
    }).when('/list',{
        templateUrl:'dom/b.html',
        controller:'bookCtr2'
    }).when('/css',{
        templateUrl:'dom/css.html',
        controller:'bookCtr3'
    }).when('/css3',{
        templateUrl:'dom/css3.html',
        controller:'bookCss3'
    }).when('/css30',{
        templateUrl:'dom/css30.html',
        controller:'bookCss30'
    }).otherwise({
        redirectTo:'/hello'
    })
});