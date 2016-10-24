"use strict";

/**
 * Created by amoroz on 23.10.16.
 */
var app = angular.module("app", []);
//1,2,3
app.factory("myFactory", function () {
    return {
        hello: "yo world",
        helloFunction: function helloFunction() {
            return "I'm text from factory function";
        }
    };
});
app.controller("myCtrl1", function ($scope, myFactory) {
    $scope.myFactory = myFactory;
    $scope.hello = "hello";

    $scope.setHello = function () {
        $scope.hello = "Changed hello from function";
    };
    $scope.setHelloByUser = function (newHello) {
        $scope.hello = newHello;
    };
});
app.controller("myCtrl2", function ($scope, myFactory) {
    $scope.myFactory = myFactory;
});

//4